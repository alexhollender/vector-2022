// open/close all menus
const toggleMenu = (e) => {
  // get the specific menu
  var $thisMenu = $(e.currentTarget).siblings('.menu');
  // if it's already showing, hide it
  if ($thisMenu.hasClass('show')) {
    $thisMenu.removeClass('show')
  // otherwise, hide all other menus and show it
  } else {
    $('.menu').removeClass('show');
    $thisMenu.addClass('show');
  }
  // if it's the language switcher, focus the field
  if ($(e.currentTarget).hasClass('language-button')) {
    $('#language-search input').focus();
  }
}

// add event listener to all menu handles
const menuHandles = $('.menu-handle');
for (const element of menuHandles) {
  element.addEventListener('click', toggleMenu)
}

const mainMenu = document.getElementById('main-menu');

// pin Main menu
const moveMainMenuToSidebar = () => {
  $('#left-sidebar').prepend(mainMenu);
  $('#main-menu-trigger').addClass('disabled');
}

// un-pin Main menu
const moveMainMenuToHeader = () => {
  $('#main-menu-trigger').removeClass('disabled');
  $('#site-header-left').append(mainMenu);
  $('#site-header-left').addClass('show-main-menu');
}

const articleToolsMenu = document.getElementById('article-tools-menu');

// move article tools between toolbar and sidebar
const moveArticleTools = () => {
  $('.page-container').toggleClass('hide-article-tools');
  if ($('.page-container').hasClass('hide-article-tools')) {
    $('#article-tools-button').addClass('highlight');
  } else {
    $('#article-tools-button').removeClass('highlight');
  }
}

// toggle menu sections
const toggleMenuSection = (e) => {
  $(e.target).siblings().toggle();
  $(e.target).toggleClass('closed');
}

// attach event to menu section headings
const menuSectionHeadings = $('#article-tools-menu .collapsible p');
for (const element of menuSectionHeadings) {
  element.addEventListener('click', toggleMenuSection)
}

// close all menus when clicking outside
$(document).on('click', 'body', () => {
  $('.menu, #toc-outer').removeClass('show');
});

// prevent clicking on menu triggers from closing menus
$('body').on('click', '.language-button, #main-menu-trigger, #main-menu-trigger-b, #unpin-main-menu, #toc-button, #article-tools-button, #unpin-article-tools-menu, .user-menu-button', function(e){
  e.stopPropagation();
});


// OPTIONS PANNEL

// toggle options pannel
const toggleOptionsPannel = () => {
  $('#open-options, #close-options, #options-form').toggle();
}

// update data attribute with current style
function updateStyle(e) {
  var target = $(e.target);
  var dataAttr = 'data-' + target[0].name;
  var style = target.val();
  $('body').attr(dataAttr, style);
}

// attach event listener to inputs
const styleInputs = $('#options input');
for (const element of styleInputs) {
  element.addEventListener('click', updateStyle)
}

// MODAL
// close modal
const closeModal = () => {
  $('#modal-bg').hide();
}
