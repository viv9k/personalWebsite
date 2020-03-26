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

$("#contactMe").click(function() {
  $('.bodyContent').slideUp(100);
  $('.bodyContent').delay(5000).slideDown(100);
  $('#readingLensComponent').slideUp(0);
});
