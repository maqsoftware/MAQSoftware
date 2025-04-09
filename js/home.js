
// function showText(id) {
//     console.log("Show text: "+ id);
//     document.getElementById(id).style.display = 'block';
// }

// function hideText(id) {
//     console.log("Hide text: "+ id);
//     document.getElementById(id).style.display = 'none';
// }

/* -------------------------customer stories carousel------------------------- */
let currentIndex = 0;

function updateCarousel() {
  const carousel = document.getElementById('customer-stories-carousel');
  const dots = document.getElementsByClassName('carousel-dot');
  const totalCards = document.getElementsByClassName('customer-stories-card').length;
  const cardWidth = document.getElementsByClassName('customer-stories-card')[0].offsetWidth + 10; // Including margin

  carousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[Math.floor(currentIndex / 4)].className += ' active';
}

function nextSlide() {
  const totalCards = document.getElementsByClassName('customer-stories-card').length;
  currentIndex = (currentIndex + 4) % totalCards;
  updateCarousel();
}

function prevSlide() {
  const totalCards = document.getElementsByClassName('customer-stories-card').length;
  currentIndex = (currentIndex - 4 + totalCards) % totalCards;
  updateCarousel();
}

function currentSlide(index) {
  currentIndex = (index - 1)*4;
  updateCarousel();
}

document.addEventListener('DOMContentLoaded', () => {
  updateCarousel();
});

/* -------------------------testimonials carousel------------------------- */

// let currentTestimonialIndex = 0;

// function updateTestimonialsCarousel() {
//   const carousel = document.getElementById('testimonials-carousel');
//   const dots = document.getElementsByClassName('testimonials-carousel-dot');
//   const totalCards = document.getElementsByClassName('testimonials-card').length;
//   const cardWidth = document.getElementsByClassName('testimonials-card')[0].offsetWidth + 10; // Including margin

//   carousel.style.transform = `translateX(${-currentTestimonialIndex * cardWidth}px)`;

//   for (let i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
//   }
//   dots[Math.floor(currentTestimonialIndex / 2)].className += ' active';
// }

// function nextTestimonial() {
//   const totalCards = document.getElementsByClassName('testimonials-card').length;
//   currentTestimonialIndex = (currentTestimonialIndex + 2) % totalCards;
//   updateTestimonialsCarousel();
// }

// function prevTestimonial() {
//   const totalCards = document.getElementsByClassName('testimonials-card').length;
//   currentTestimonialIndex = (currentTestimonialIndex - 2 + totalCards) % totalCards;
//   updateTestimonialsCarousel();
// }

// function currentTestimonial(index) {
//   currentTestimonialIndex = (index - 1) * 2;
//   updateTestimonialsCarousel();
// }

// document.addEventListener('DOMContentLoaded', () => {
//   updateTestimonialsCarousel();
// });

/* -------------------------community carousel------------------------- */

// let currentCommunityIndex = 0;

// function updateCommunityCarousel() {
//   const comm_carousel = document.getElementById('community-carousel');
//   const comm_dots = document.getElementsByClassName('community-carousel-dot');
//   const comm_totalCards = document.getElementsByClassName('community-card').length;
//   const comm_cardWidth = document.getElementsByClassName('community-card')[0].offsetWidth + 10; // Including margin

//   comm_carousel.style.transform = `translateX(${-currentCommunityIndex * comm_cardWidth}px)`;

//   for (let i = 0; i < comm_dots.length; i++) {
//     comm_dots[i].className = comm_dots[i].className.replace(' active', '');
//   }
//   comm_dots[Math.floor(currentCommunityIndex / 3)].className += ' active';
// }

// function nextCommunity() {
//   const comm_totalCards = document.getElementsByClassName('community-card').length;
//   currentCommunityIndex = (currentCommunityIndex + 3) % comm_totalCards;
//   updateCommunityCarousel();
// }

// function prevCommunity() {
//   const comm_totalCards = document.getElementsByClassName('community-card').length;
//   currentCommunity = (currentCommunityIndex - 3 + comm_totalCards) % comm_totalCards;
//   updateCommunityCarousel();
// }

// function currentCommunity(index) {
//   currentCommunityIndex = (index - 1) * 3;
//   updateCommunityCarousel();
// }

// document.addEventListener('DOMContentLoaded', () => {
//   updateCommunityCarousel();
// });

