let uiLang = 'en';

// get language code from URL, store in session storage, call setUiLanguage
function getLanguageFromURL() {
  const string = window.location.href;
  // if there is a language code
  if (string.split('?')[1]) {
    const langCode = string.split('?')[1];
    // store language code in session storage
    sessionStorage.setItem('language', langCode);
  }
  setUiLanguage();
}

function setUiLanguage() {
  // if there is a language code in session storage
  if (sessionStorage.getItem('language')) {
    uiLang = sessionStorage.getItem('language');
    updateUiStrings()
  }
}

function updateUiStrings() {
  for (const [key, value] of Object.entries(strings[uiLang])) {
    $(`[data-string="${key}"]`).html(value);
  }
  // replace placeholder text in search input
  var input = document.querySelectorAll('.search-container input');
  input.forEach(function(item) {
    item.placeholder = strings[uiLang]['searchsuggest-search'];
  });
}

const stringKeys = 'aboutsite|wikibase-editlinkstitle|nstab-main|betafeatures-toplink|citethispage-link|portal|contactpage|contents|toc|mycontris|pt-createaccount|currentevents|delete|sitesupport|edit|visualeditor-ca-editsource|help|skin-view-history|wikibase-otherprojects|vector-languages|introduction|pt-login|pt-userlogout|mainpage-description|move|pageinfo-toolboxlink|vector-anon-user-menu-pages|permalink|mypreferences|coll-print_export|printableversion|purge|randompage|skin-view-view|recentchanges|recentchangeslinked-toolbox|sandboxlink-portlet-label|searchbutton|searchsuggest-search|specialpages|tagline|talk|mytalk|toolbox|cx-campaign-contributionsmenu-mytranslations|upload|cx-campaign-contributionsmenu-myuploads|whatlinkshere|wikibase-dataitem'

const translatedStrings = {};

const getStrings = async (lang) => {
  var url = `https://${lang}.wikipedia.org/w/api.php`;
  var params = {
      format: "json",
      action: "query",
      meta: "allmessages",
      ammessages: stringKeys,
      amlang: lang,
      origin: "*"
  };
  var resp = await fetch(url + '?' + new URLSearchParams(params));
  var json = await resp.json();
  var stringsArr = json.query.allmessages;
  for (const element of stringsArr) {
    var stringName = element.name;
    if (stringName.includes('-')) {
      stringName = `'${stringName}'`
    }
    var stringVal = element['*'];
    translatedStrings[stringName] = stringVal;
  }
  console.log(translatedStrings);
}
