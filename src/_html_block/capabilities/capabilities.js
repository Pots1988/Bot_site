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