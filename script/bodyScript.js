// window.onscroll = function() {myFunction()};

// var header = document.getElementById("head");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     document.getElementById("menuName").style.width = "100%";
//     document.getElementById("menuName").style.display = "";
//   } else {
//     document.getElementById("menuName").style.width = "0px";
//     document.getElementById("menuName").style.display = "100%";
//   }
// }

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
      scrollTop: $("#internMenuCover").offset().top
  }, 100);
});


$("#projectProposal").click(function() {
  var url = $(this).attr('href'); 
  window.open(url, '_blank');
});

$("#projectReport").click(function() {
  var url = $(this).attr('href'); 
  window.open(url, '_blank');
});

$("#projectAbstract").click(function() {
  var url = $(this).attr('href'); 
  window.open(url, '_blank');
});