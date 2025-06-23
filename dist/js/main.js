$( document ).ready(function() {
  // aos
  AOS.init({
    startEvent: 'DOMContentLoaded',
    duration: 850,
    offset: 85,
    delay: 50,
    once: false,
    easing: 'ease-out',
    disable: 'mobile'
  });

  // burger
  $('.header-burger').on('click', function() {
    $(this).toggleClass('active');
    $('.burger').toggleClass('active');
    $('.header').toggleClass('active');
    $('html').toggleClass('active');
  });

  // splide
  const splideBrands = document.querySelector('.splide-brands')
  const splideAdvices = document.querySelector('.splide-advice')
  const splideReviews = document.querySelector('.splide-reviews')
  const splideServices = document.querySelector('.splide-services')
  const splideGoals = document.querySelector('.splide-goals')
  const splideUiSlider = document.querySelectorAll('.ui-card-slider')

  if(splideBrands) {
    new Splide( splideBrands, {
      type: 'loop',
      direction: 'rtl',
      perPage: 7,
      pauseOnFocus: false,
      pagination: false,
      arrows: false,
      gap: 40,
      autoWidth: true,

      breakpoints: {
        1200: {
          gap: 32
        },
        1024: {
          gap: 22
        },
        768: {
          gap: 12
        }
      }
    }).mount(window.splide.Extensions);
  }

  if(splideAdvices) {
    new Splide( splideAdvices, {
      direction: 'rtl',
      destroy: true,
      perPage: 2,
      pagination: false,
      arrows: false,

      breakpoints: {
        1024: {
          destroy: false,
          gap: 10,
          arrows: true,
        },
        576: {
          perPage: 1,
          gap: 20
        },
      }
    }).mount();
  }

  if(splideReviews) {
    new Splide( splideReviews, {
      direction: 'rtl',
      // destroy: true,
      perPage: 3,
      pagination: false,
      arrows: true,
      gap: 20,

      breakpoints: {
        1024: {
          gap: 10,
          perPage: 2,
        },
        768: {
          perPage: 1,
          gap: 20
        },
      }
    }).mount();
  }

  if(splideServices) {
    new Splide( splideServices, {
      direction: 'rtl',
      destroy: true,
      perPage: 2,
      pagination: false,
      arrows: false,

      breakpoints: {
        768: {
          destroy: false,
          gap: 10,
          arrows: true,
        },
        576: {
          perPage: 1,
          gap: 20
        },
      }
    }).mount();
  }

  if(splideGoals) {
    new Splide( splideGoals, {
      direction: 'rtl',
      destroy: true,
      perPage: 2,
      pagination: false,
      arrows: false,

      breakpoints: {
        768: {
          destroy: false,
          gap: 10,
          arrows: true,
        },
        576: {
          perPage: 1,
          gap: 20
        },
      }
    }).mount();
  }

  if(splideUiSlider.length) {
    for ( var i = 0; i < splideUiSlider.length; i++ ) {
      new Splide( splideUiSlider[ i ], {
        direction: 'rtl',
        destroy: true,
        perPage: 2,
        pagination: false,
        arrows: false,

        breakpoints: {
          768: {
            destroy: false,
            gap: 10,
            arrows: true,
          },
          576: {
            perPage: 1,
            gap: 20
          },
        }
      }).mount();
    }
  }

  // info details
  const infoBtns = document.querySelectorAll('.info-summary')

  if(infoBtns.length) {
    infoBtns.forEach(el => {
      el.addEventListener('click', (e) => {
        const parent = e.target.closest('.info-details')

        parent.classList.toggle('active')
      })
    })
  }

  // ui cards
  const uiCards = document.querySelectorAll('.ui-card-btn')

  if (uiCards.length) {
    uiCards.forEach(el => {
      el.addEventListener('click', (e) => {
        const parent = e.target.closest('.ui-card-item')

        if (parent.classList.contains('active')) {
          parent.classList.remove('active')
        } else {
          document.querySelectorAll('.ui-card-item.active').forEach(item => {
            item.classList.remove('active')
          })
          parent.classList.add('active')
        }
      })
    })
  }


  // anchro links
  const anchorLinks = document.querySelectorAll('.anchor-link')

  anchorLinks.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();

      Jump('.contacts .application-content', {
        duration: 0,
        // offset: -100
      })
    })
  })
});