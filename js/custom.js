
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

/*---------------------------------------
  Gallery              
-----------------------------------------*/
// --- SCRIPT MODAL POPUP & CAPTION ---
const imageModal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");

const galleryItems = document.querySelectorAll('.gallery-item');

// 1. Logic Buka Modal + Ambil Caption
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        if (img) {
            imageModal.style.display = "flex"; 
            modalImg.src = img.src; 
            
            // AMBIL DATA CAPTION
            const captionText = img.getAttribute('data-caption');
            
            // Kalau ada caption, tampilin. Kalau nggak ada, sembunyiin teksnya.
            if (captionText) {
                modalCaption.innerText = captionText;
                modalCaption.style.display = "inline-block";
            } else {
                modalCaption.style.display = "none";
            }
        }
    });
});

// 2. Logic Tutup Modal
function closeImage() {
    imageModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == imageModal) {
        closeImage();
    }
}

// --- ANIMASI SCROLL ---
document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => { 
                    entry.target.classList.add('is-visible'); 
                }, index * 50);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => observer.observe(el));
});