$(".features__item").addClass("js-hidden");
$(".features__item").viewportChecker({
  classToAdd: "animated fadeIn",
  classToRemove: "js-hidden",
  offset: "20%"
});