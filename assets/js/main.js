document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }
  
  /**
   * Unmute video
   */
  const video = document.getElementById('video');
  function toggleMute(){
    video.muted = !video.muted;
    document.getElementById('hide-btn').style.display = 'none';
  }
  window.addEventListener('click', toggleMute);

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Swiper conteúdos
   */
  new Swiper(".tranding-slider", {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1
      },
      // when window width is >= 390px
      390: {
        slidesPerView: 'auto'
      }
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  
  /**
   * Swiper depoimentos
   */
  new Swiper(".dep", {
    cssMode: true,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 4,
    spaceBetween: 1,
    autoHeight: true,
    parallax:true,
    breakpoints: {
      450: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1250: {
        slidesPerView: 2,
        spaceBetween: 20,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});