//Script to hide navbar on scroll down; show on scroll up
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-12vh";
  }
  prevScrollpos = currentScrollPos;
}

// Blog tiles of equal height
var cw = $('.blog-tile').width();
$('.blog-tile').css({'height':cw+'px'});