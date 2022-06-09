// stores the sections of the curent page
let sections;
// stores the current section in view
var currentSection;
// stores the number of attempts printToc() has made
let tocErrorAttempts = 0;

// get section headings for a given article
function getSections(title) {
  $.getJSON(`https://${uiLang}.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=${title}&redirects=1&prop=sections`,
    function(data) {
      console.log('getting sections...');
      sections = data.parse.sections;
      printToc();
    });
}

// ========================================
// PRINT ToC
// ========================================

// print the ToC to the container
function printToc() {
  if (sections) {
    sections.forEach(function(element) {
      var selector = '.toc-wrapper > ul';
      // generate the appropriate selector based on toclevel
      for (i = 1; i < element.toclevel; i++) {
        selector = selector + '> li:last-child > ul';
      }
      // if it's a top level section
      if (element.toclevel === 1) {
        $(selector).append(`
          <li class="toc-level-${element.toclevel}">
            <span onclick="arrowToggle(this)"></span>
            <a href='#${element.anchor}'>${element.line}</a>
            <ul class="level-2"></ul>
          </li>
        `);
      // if it's not a top level section
      } else {
        // add parent class to last top level section
        $('.toc-wrapper > ul > li:last-child').addClass('parent').on( "click", function() {
          showChildren(this)
        });
        $(selector).append(`
          <li class="toc-level-${element.toclevel}">
            <a href='#${element.anchor}'>${element.line}</a>
            <ul class="level-${element.toclevel + 1}"></ul>
          </li>
        `)
      }
    });
    // if there are less than 4 sections hide ToC
    if (sections.length < 4) {
      $('.page-container').addClass('no-toc');
    // if there are less than 24 sections expand all sections
    } else if (sections.length < 24) {
      $('#table-of-contents li').addClass('show-children');
    }
  } else {
    // if sections aren't there yet retry the function up to 5 times
    tocErrorAttempts++;
    if (tocErrorAttempts < 5) {
      console.log(`toc did not load. Retry ${tocErrorAttempts}/5`);
      setTimeout(function(){
        printToc();
      }, 500);
    } else {
      window.alert('There was an error loading the table of contents. Please reload the page');
    }
  }
}

// ========================================
// SCROLL SPY ON SECTIONS
// ========================================

// clear active ToC section
function clearActive() {
  $('#table-of-contents a').removeClass('active');
}

const config = {
  rootMargin: '0px 0px -90%',
  threshold: 0
};

let observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentSection = entry.target.id;
      clearActive();
      // if the introduction section is intersecting
      if (currentSection === 'Introduction') {
        $('a[href="#top"]').addClass('active');
      } else {
        $(`a[href="#${currentSection}"]`).addClass('active');
        // get parent element
        var parent = $(`a[href="#${currentSection}"]`).closest('.parent');
        // if there is a parent element
        if (parent.length === 1) {
          $(parent[0].children[1]).addClass('active');
        }
      }
    // if no sections are intersecting and near top
    } else if (!entry.isIntersecting && window.pageYOffset < 100) {
      clearActive();
      $('a[href="#top"]').addClass('active');
      console.log('special case');
    }
  });
}, config);

// ==============================
// ToC INTERACTIONS
// ==============================

// expand collapsed sections when clicking on toc top level item
const showChildren = (element) => {
  $(element).addClass('show-children');
}

// expand/collapse ToC sections
const arrowToggle = (element) => {
  event.stopPropagation();
  $(element).closest('li').toggleClass('show-children');
}

// move ToC between sidebar and in header
const moveToC = () => {
  $('.page-container').toggleClass('hide-toc');
}

// scroll toc in header to current section (for long tocs)
function scrollToCurSection() {
  var elem = document.querySelector(`#toc-outer #table-of-contents li a[href="#${currentSection}"]`);
  var elemRect = elem.getBoundingClientRect();
  // if section link is below the fold
  if (elemRect.top > 728) {
    // if element is closer to the top of the ToC
    document.getElementById('toc-outer').scrollTop = elemRect.bottom;
    // if element is closer to the bottom of the ToC
    // (add function here)
  // if section link is above the fold
  } else if (elemRect.top < 5) {

  }
}
