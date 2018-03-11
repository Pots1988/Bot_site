$(window).paroller();
if (window.innerWidth < 769) {
  $(".promo__img").viewportChecker({
    classToAdd: "animated zoomOut",
    // classToAddForFullView: "animated zoomOut",
    offset: "80%"
  });
}
