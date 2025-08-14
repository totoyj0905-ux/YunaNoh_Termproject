// AOS
AOS.init({
  duration:1000,
  delay:300,
});
// data-aos-duration="1500" data-aos-delay="500"

// sec03 swiper style start
let swiper = new Swiper(".slide_container1", {
  slidesPerView: 6.4,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    // el: ".swiper-pagination",
    clickable: true,
  },
});

let swiper2 = new Swiper(".slide_container2", {
  slidesPerView: 6.4,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    // el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperSlides = document.querySelectorAll('.swiper');

swiperSlides.forEach(function (element, index) {
    element.classList.add("swiper-" + index);
    let swiper = new Swiper(".swiper-" + index, {
      autoplay: {
            delay: 1,
            desableOnInteraction: false,
      },
      speed: 1000,
      loop: true,
      slidesPerView: 5,
      spaceBetween:30,
      freemode: true,      
    });
});
// sec03 swiper style end

// sec08 swiper style start
const swiperSlide = document.querySelectorAll('.sec08_slide_container');
console.log(swiperSlide)

swiperSlide.forEach(function (element, index) {
    element.classList.add("sec08_slide_container-" + index);
    let swiper = new Swiper(".sec08_slide_container-" + index, {
      autoplay: {
            delay: 1,
            desableOnInteraction: false,
      },
      speed: 1000,
      loop: true,
      slidesPerView:"auto",
      spaceBetween:30,
      freemode: true,      
    });
});
// sec08 swiper style end

/* === Reset Script === */
/* AOS already included elsewhere; ensure init */
if (window.AOS) { AOS.init({ once: true }); }

/* GLightbox (lightbox for gallery) */
try {
  const lightbox = GLightbox({ selector: '.glightbox' });
} catch(e) { console.warn('GLightbox not available', e); }

/* MixItUp (filtering/sorting) */
try {
  var mixContainer = document.querySelector('#mix-gallery');
  if (mixContainer) {
    var mixer = mixitup(mixContainer, {
      selectors: { target: '.mix' },
      animation: { duration: 300 }
    });
    // ARIA pressed state toggle
    document.querySelectorAll('.controls .filter').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.controls .filter').forEach(b => b.setAttribute('aria-pressed','false'));
        btn.setAttribute('aria-pressed','true');
      });
    });
  }
} catch(e) { console.warn('MixItUp not available', e); }

/* MicroModal (accessible modal) */
try {
  MicroModal.init({ openClass: 'is-open', disableScroll: true });
} catch(e) { console.warn('MicroModal not available', e); }

/* jQuery Validate for newsletter form */
try {
  if (window.jQuery) {
    jQuery(function($){
      var $form = $('#newsletter-form');
      if ($form.length) {
        $form.validate({
          rules: {
            name: { required: true, minlength: 2 },
            email: { required: true, email: true },
            agree: { required: true }
          },
          messages: {
            name: 'Please enter your name (min 2 characters).',
            email: 'Please enter a valid email address.',
            agree: 'You must agree to the privacy policy.'
          },
          errorElement: 'span',
          errorClass: 'error-text',
          highlight: function(el){ el.setAttribute('aria-invalid','true'); },
          unhighlight: function(el){ el.removeAttribute('aria-invalid'); },
          submitHandler: function(form){
            var el = document.getElementById('nl-success');
            if (el){ el.classList.remove('sr-only'); el.textContent = 'Thanks for subscribing!'; }
            form.reset();
            return false;
          }
        });
      }
    });
  }
} catch(e) { console.warn('jQuery Validate not available', e); }

/* Leaflet Map */
try {
  var mapEl = document.getElementById('leafletMap');
  if (mapEl && window.L) {
    var map = L.map('leafletMap').setView([35.6672, 139.7123], 14); // Omotesando, Tokyo
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap'
    }).addTo(map);
    L.marker([35.6672, 139.7123]).addTo(map)
      .bindPopup('CDG Flagship (Tokyo)<br/>Demo marker for assignment.').openPopup();
  }
} catch(e) { console.warn('Leaflet not available', e); }
/* === End Assignment Additions === */

