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

$(window).scroll(function() {
  if ($(this).scrollTop()>100)
   {
     $('#menu').css('background-size',"100%");
     $('.menuName').show(200);
   }
  else
   {
    $('.menuName').hide(200);
    $('#menu').css('background',"");
   }
  });