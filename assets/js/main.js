$(document).ready(function(){
  $('.header_search_btn-categories').on('click', function(){
    $('.form_menu-cate').toggleClass("active");
  });

  //tab in index
  $('.tabs_btn').on('click', function(){
    //get name tab
    var _tab = $(this).data('tab');
    //active tab_btn click
    $(this).parent().find('.tabs_btn').removeClass('active');
    $(this).addClass('active');
    //show tabs-content_wrap
    $(this).parent().parent().find('.tabs-content_wrap').removeClass('active');
    $('#' + _tab).addClass('active');
  });

  // set width = height image in tabs
  function setHeightImgInTabs(){
    var _width = $('.tabs_items .link-img img').innerWidth();
    $('.tabs_items .link-img img').css('height', _width);
  }
  setHeightImgInTabs();
  $(window).on('resize', function(){
    setHeightImgInTabs();
  });
  // handle buntton collapse-nav
  function handleNavMenu(){
    $('#collapse-nav-btn').on('click', function(e){
      e.preventDefault();
      $('.nav_menu').toggleClass('active');
      $('.sp-slideshow').toggleClass('fluid');
    });
  }
  handleNavMenu();
  function hideNavMenuWhenWindowScroll(){
    if( window.innerWidth >= 1024 && ($('.nav_menu').height() + $('.nav_menu').offset().top) >= $('.main').offset().top){
      $('.nav_menu').addClass('active');
      $('.sp-slideshow').addClass('fluid');
    };
  }
  hideNavMenuWhenWindowScroll();
  $(window).on('click', function(e){
    if(e.clientX > 200 && window.innerWidth <= 1024 ){
      $('.nav_menu').removeClass('active');
    }
  }).on('scroll', () => {
    hideNavMenuWhenWindowScroll();
  });

  //popup login form login
  $('.header_account').on('click', () => {
    $('#popup-login').show();
      $(window).on('scroll', () => {
        if($(window).innerWidth() >= 992){
          $('#popup-login').hide();  
        }

      });

  });
  //hide popup-login
  $('#popup-login_btn-close').on('click', () => {
    $('#popup-login').hide();
  });
});
