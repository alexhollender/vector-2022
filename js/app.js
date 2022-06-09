// urlString
let urlString;
// page title
let pageTitle;
// current article page title
let articlePageUrl;
// current talk page title
let talkPageUrl;
// object of headings
let headingsObject = [];
// links in lead section
let introLinks;

// get page title from URL, call getPage and getSections
function getPageTitleFromUrl() {
  // get path after '/'
  urlString = window.location.pathname.substr(1);
  // replace any '_' with spaces
  let urlStringClean = urlString.replace(/_/g, ' ');
  // cleanup URI encoded page names
  if (urlStringClean.includes('%')) {
    pageTitle = decodeURI(urlStringClean);
  } else {
    pageTitle = urlStringClean;
  }
  getPage(urlStringClean);
  getSections(urlStringClean);
  checkArticleOrTalk();
};

// gets page HTML from restbase API
function getPage(title) {
  $.get( `https://${uiLang}.wikipedia.org/api/rest_v1/page/html/${title}`, function(data) {
    console.log('getting page...');
    $('div.content').html(data);
    // add the page heading
    $('div.article-header h1').html(pageTitle);
    // add the page title to the floating header
    $('div.article-title-subheader .title').html(pageTitle);
    // reset the <base> URL
    $('base').attr('href','');
    setVisitedLinks();
    // observe which section is currently in view
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((section) => {
     observer.observe(section);
   });
   // observe whether or not you are below the main title element
  headerObserver.observe(document.querySelector('#article-header'));
  });
};

// show/hide sticky sticky header & sticky toc button
var headerObserver = new IntersectionObserver(function(element) {
  if (element[0].isIntersecting === true) {
    $('body').removeClass('showStickyHeader');
    $('.page-container').removeClass('toc-button-stick');
    $('#outer-container').removeClass('move-up');
  } else {
    $('body').addClass('showStickyHeader');
    $('.page-container').addClass('toc-button-stick');
    $('#outer-container').addClass('move-up');
  }
});

// switch logged-in logged-out state
const switchLoginState = () => {
  if ($('body').hasClass('loggedOut')) {
    $('.page-container').removeClass('hide-article-tools');
  } else {
    $('.page-container').addClass('hide-article-tools');
  }
  $('body').toggleClass('loggedIn loggedOut');
}

const checkArticleOrTalk = () => {
  // if page title doesn't include talk prefix (from strings object)
  if (!pageTitle.includes(strings[uiLang].talk)) {
    console.log('on an article page');
    // create talk page link
    let talkPage = `${strings[uiLang].talk}:${urlString}`
    talkPageUrl = `${window.location.origin}/${talkPage}`;
  // if page title includes talk prefix
  } else {
    console.log('on a talk page');
    // create article page link
    let articlePage = urlString.split(":").pop();
    articlePageUrl = `${window.location.origin}/${articlePage}`;
    // switch the active tab to Talk
    $('#article-tab').removeClass('active');
    $('#talk-tab').addClass('active');
    $('#sticky-header').addClass('talk-page');
  }
}

// switch to Article page
const switchToArticle = () => {
  if (articlePageUrl) {
    location.href = articlePageUrl;
  }
}

// switch to Talk page
const switchToTalk = () => {
  if (talkPageUrl) {
    location.href = talkPageUrl;
  }
}

function setVisitedLinks() {
  introLinks = $('section[data-mw-section-id=0] p > a[rel="mw:WikiLink"]');
  $(introLinks[2]).addClass('visited');
  $(introLinks[introLinks.length - 1]).addClass('visited');
}

const checkShowModal = () => {
  // if they have not visited yet show modal
  if (!sessionStorage.visited) {
    $('#modal-bg').css('display', 'flex');
    sessionStorage.setItem('visited', true);
  }
}

$(document).ready(function() {
  getLanguageFromURL();
  getPageTitleFromUrl();
  checkShowModal();
});
