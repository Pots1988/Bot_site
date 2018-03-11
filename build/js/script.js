$(".capabilities__info, .capabilities__img").addClass("js-hidden");
$(".capabilities__info").viewportChecker({
  classToAdd: "animated fadeInRight",
  classToRemove: "js-hidden",
  offset: "20%"
});
$(".capabilities__img").viewportChecker({
  classToAdd: "animated fadeInLeft",
  classToRemove: "js-hidden",
  offset: "20%"
});
$("#connect").viewportChecker({
  classToAdd: "active",
  offset: "40%"
});
$(".features__item").addClass("js-hidden");
$(".features__item").viewportChecker({
  classToAdd: "animated fadeIn",
  classToRemove: "js-hidden",
  offset: "20%"
});
$(window).on("load",function(){
  $("head").append('<link rel="stylesheet" href="css/bg.css">')
});
$(".header__btn").on("click", function(){
  if($(this).hasClass("active")) {
    $(this).removeClass("active");
    $("body").removeClass("menu-open");
    $(".menu").slideUp();
  } else {
    $(this).addClass("active");
    $(".menu").slideDown();
    $("body").addClass("menu-open");
  }
});
function eraseMenuStyles(item){
  if (window.innerWidth > 1024) {
    item.attr("style","");
  }
}
$(window).on("resize", function(){
  eraseMenuStyles($(".menu"));
});
$(".menu a").on("click", function() {
  if (location.pathname.replace(/^\//,") == this.pathname.replace(/^\//,") && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
    if (target.length) {
      var top;
      if (window.innerWidth < 1025) {
        top = target.offset().top - 50
      } else {
        top = target.offset().top - 92
      }
      $("html,body").animate({
        scrollTop: top
      }, 1000);
      if (window.innerWidth < 1025) {
        $(".header__btn").removeClass("active");
        $("body").removeClass("menu-open");
        $(".menu").slideUp();
      }
      return false;
    }
  }
});
$(window).paroller();
if (window.innerWidth < 769) {
  $(".promo__img").viewportChecker({
    classToAdd: "animated zoomOut",
    // classToAddForFullView: "animated zoomOut",
    offset: "80%"
  });
}

if ($("#reviews__slider").length) {
  $("#reviews__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $("#reviews__slider").siblings(".slider__btn--left"),
    nextArrow: $("#reviews__slider").siblings(".slider__btn--right"),
    dots: true
  });
}
if ($("#whom__slider").length) {
  $("#whom__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $("#whom .slider__btn--left"),
    nextArrow: $("#whom .slider__btn--right"),
    dots: true
  });
}