
  (function ($) {
  
  "use strict";
  $('.navbar-collapse a:not(.dropdown-toggle)').on('click',function(){
    $(".navbar-collapse").collapse('hide');
  });

    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-0;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 20,
        autoplay: true,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1,
            },
            767:{
                items: 2,
            },
            1200:{
                items: 3,
            }
        }
    });
  
  })(window.jQuery);


let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener('load', function () {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

const videoModal = document.getElementById("videoModal");
const modalFrame = document.getElementById("modalFrame");

// Fungsi Buka Video
function openVideo(url) {
    videoModal.style.display = "flex"; 
    modalFrame.src = url + "?autoplay=1&rel=0"; 
}

function closeVideo() {
    videoModal.style.display = "none";
    modalFrame.src = ""; 
}

window.onclick = function(event) {
    if (event.target == videoModal) {
        closeVideo();
    }
}
