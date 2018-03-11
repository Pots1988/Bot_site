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