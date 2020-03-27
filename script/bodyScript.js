$('.menuName').ready(function() {
  $('.menuName').hide();
});

$("#aboutMe").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#aboutMenuCover").offset().top
  }, 100);
});

$("#resume").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#workMenuCover").offset().top
  }, 100);
});

// dummy Implementatiion of contact us

$(".contactMeComponent").ready(function() {
  $('.contactMeComponent').hide(0);
});

$("#contactMe").click(function() {
  $('.bodyContent').slideUp(500);
  $('.contactMeComponent').fadeIn(300);
  $('#footer').css('position', 'fixed');
});

$("#backToMain").click(function() {
  $('#footer').css('position', '');
  $('.contactMeComponent').fadeOut(50);
  $('.bodyContent').slideDown(0);
  $('#readingLensComponent').hide(0);
});
