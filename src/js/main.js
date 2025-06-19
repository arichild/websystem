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

  // popup
  $(document).on("click", ".mfp-link", function () {
    var a = $(this);

    $.magnificPopup.open({
      items: { src: a.attr("data-href") },
      type: "ajax",
      overflowY: "scroll",
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in',
      ajax: {
        tError: "Error. Not valid url",
      },
      callbacks: {
        open: function () {
          setTimeout(function(){
            $('.mfp-wrap').addClass('not_delay');
            $('.mfp-popup').addClass('not_delay');
          },700);
        }
      },

      callbacks: {
        open: function() {
          document.documentElement.style.overflow = 'hidden'
        },

        close: function() {
          document.documentElement.style.overflow = ''
        }
      }
    });
    return false;
  });



  // validate
  $.validator.messages.required = 'Пожалуйста, введите данные';

  jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^([а-яё ]+|[a-z ]+)$/i.test(value);
  }, "Поле может состоять из букв и пробелов, без цифр");

  jQuery.validator.addMethod("phone", function (value, element) {
    if (value.startsWith('+375')) {
      return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12}(\s*)?$/i.test(value);
    } else if (value.startsWith('+7')) {
      return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11}(\s*)?$/i.test(value);
    } else {
      return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/i.test(value);
    }
  }, "Введите полный номер");



  // imask
  let phone = document.querySelectorAll('.phone-mask')

  if(phone.length) {
    phone.forEach(element => {
      IMask(element, {
        mask: [
          {
            mask: '+{375} (00) 000 00 00',
            startsWith: '375',
            overwrite: true,
            lazy: false,
            placeholderChar: '_',
          },
          {
            mask: '+{7} (000) 000 00 00',
            startsWith: '7',
            overwrite: true,
            lazy: false,
            placeholderChar: '_',
          },
          {
            mask: '+0000000000000',
            startsWith: '',
            country: 'unknown'
          }
        ],

        dispatch: function (appended, dynamicMasked) {
          var number = (dynamicMasked.value + appended).replace(/\D/g, '');

          return dynamicMasked.compiledMasks.find(function (m) {
            return number.indexOf(m.startsWith) === 0;
          });
        }
      })
    });
  }

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

  // if(uiCards.length) {
  //   uiCards.forEach(el => {
  //     el.addEventListener('click', (e) => {
  //       const parent = e.target.closest('.ui-card-item')

  //       parent.classList.toggle('active')
  //     })
  //   })
  // }

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