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