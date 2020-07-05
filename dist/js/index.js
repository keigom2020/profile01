$(function(){
  $('a[href^="#"]').click(function() {
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
  });
});

// slick
$(document).ready(function(){
  $('.single').slick({
    autoplay: true,
    dots: false,
    slidesToShow: 3,
    infinite: true,
    centerMode: true,
    speed: 100,
    slidesToScroll: 3,
    dotsClass: 'slide-dots'
  });
});

// modal.js
// $(function(){
//   $('.js-modal-open').on('click',function(){
//       $('.js-modal').fadeIn();
//       return false;
//   });
//   $('.js-modal-close').on('click',function(){
//       $('.js-modal').fadeOut();
//       return false;
//   });
// });

$(function(){
  // SP時のヘッダーの高さ調節
    $(window).on('load resize', function() {
      $(document).ready(function () {
        if (window.matchMedia( '(max-width: 768px)' ).matches) {
          hsize = $('header').height();//ヘッダーの高さを取得
          $(".content").css("padding-top", hsize + "px");//取得したヘッダーの高さ分.contentにpadding-topを指定
        }else {
          $(".content").removeAttr('style');
        }
    });
    });
  // SPメニュー
    // $('.nav_buttom').click(function () {
    //   $(this).toggleClass('active');
    //   $('.nav_area_bg').fadeToggle();
    //   $('nav').toggleClass('open');
    // })
    // $('.nav_area_bg').click(function () {
    //   $(this).fadeOut();
    //   $('.menuIcon').removeClass('active');
    //   $('.nav_buttom').removeClass('active');
    //   $('nav').removeClass('open');
    // });
    // $('.nav_area_sp nav ul li a').click(function () {
    //   $('.menuIcon').removeClass('active');
    //   $('.nav_buttom').removeClass('active');
    //   $('nav').removeClass('open');
    // });
  
  // スクロール時に追従分の高さを取る
    var headerNav = $(".nav.pc").outerHeight();
    var headerHight = $("header").outerHeight();
      $("a").click(function() {
      if (window.matchMedia( '(min-width: 769px)' ).matches) {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "body" : href);
        var position = target.offset().top - headerNav;
        $("html, body").animate({ scrollTop: position }, 500, "swing");
    }else {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "body" : href);
        var position = target.offset().top - headerHight;
        $("html, body").animate({ scrollTop: position }, 500, "swing");
  
    }
  });
  
  // スムーススクロール
    var topBtn = $('.totop');
    topBtn.hide();
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 100) {
        topBtn.fadeIn("400");
      } else {
        topBtn.fadeOut("400");
      }
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight() + $(".nav.pc").height();//止めたい位置
      if (scrollHeight - scrollPosition <= footHeight ) {
        topBtn.css({
          "position": "absolute",
          "bottom": 90
        });
        if ( scrollHeight - scrollPosition  <= footHeight && window.matchMedia( '(max-width: 767px)' ).matches) {
          topBtn.css({
          "bottom": 0
          });
        }
      } else {
        topBtn.css({
        "position": "fixed",
        "bottom": 10
        });
      }
    });
  
  topBtn.on('click', function() {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
  });
  