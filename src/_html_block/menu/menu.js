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