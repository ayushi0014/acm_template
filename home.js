const platforms = document.querySelector('.platforms .slide-track')

const rollingAnimation = platforms.animate([
  { transform: 'translateX(0)' },
  { transform: `translateX(${-200 * 13}px)` }
],
  { iterations: Infinity, duration: 80 * 1000 });

function rollCarousel() {
  rollingAnimation.play()
}

function pauseCarousel() {
  rollingAnimation.pause();
}

platforms.addEventListener('mouseover', pauseCarousel)
platforms.addEventListener('mouseout', rollCarousel)

if (window.matchMedia("(max-width: 800px)").matches) {
    transform: `translateX(${-150 * 13}px)`
}


$('a.taphover').on("touchstart", function (e) {
    "use strict"; //satisfy the code inspectors
    var link = $(this); //preselect the link
    if (link.hasClass('hover')) {
        return true;
    } else {
        link.addClass("hover");
        $('a.taphover').not(this).removeClass("hover");
        e.preventDefault();
        return false; //extra, and to make sure the function has consistent return points
    }
});
$(document).ready(function() {
  var front = document.getElementsByClassName("front");
  var back = document.getElementsByClassName("back");

  var highest = 0;
  var absoluteSide = "";

  for (var i = 0; i < front.length; i++) {
    if (front[i].offsetHeight > back[i].offsetHeight) {
      if (front[i].offsetHeight > highest) {
        highest = front[i].offsetHeight;
        absoluteSide = ".front";
      }
    } else if (back[i].offsetHeight > highest) {
      highest = back[i].offsetHeight;
      absoluteSide = ".back";
    }
  }
  $(".front").css("height", highest);
  $(".back").css("height", highest);
  $(absoluteSide).css("position", "absolute");
});
