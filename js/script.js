$(function () {
  //submenu를 숨긴다.
  $('.submenu_wrap').hide();
  $('.gnb li').mouseenter(function () {
    $('.submenu_wrap').stop().slideDown();
  });
  //지칭을 하기 위해 gnb와 submenu를 포함하는 box를 만들어야함.
  $('#gnb_wrap').mouseleave(function () {
    $('.submenu_wrap').stop().slideUp();
  });

});


$(document).ready(function () {
  $('#gnb_wrap').hide();
  // Header scroll class
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#gnb_wrap').addClass('header-scrolled');
      $('#gnb_wrap').slideDown(0);
    } else {
      $('#gnb_wrap').removeClass('header-scrolled');
      $('#gnb_wrap').slideUp(0);
    }
  })

});



$(function () {
  $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false, /* 화살표 */

  });
});
$(function () {
  $('.fade1').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true, /* 화살표 */

  });
});