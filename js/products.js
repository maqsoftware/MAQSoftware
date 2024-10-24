// products carousel

let currentProductsIndex = 0;

function updateProductsCarousel() {
  const carousel = document.getElementById('products-carousel');
  const dots = document.getElementsByClassName('products-carousel-dot');
  const totalCards = document.getElementsByClassName('products-card').length;
  console.log(totalCards)
  const cardWidth = document.getElementsByClassName('products-card')[0].offsetWidth + 10; // Including margin

  carousel.style.transform = `translateX(${-currentProductsIndex * cardWidth}px)`;

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[Math.floor(currentProductsIndex)].className += ' active';
}

function nextProducts() {
  const totalCards = document.getElementsByClassName('products-card').length;
  currentProductsIndex = (currentProductsIndex + 1) % totalCards;
  updateProductsCarousel();
}

function prevProducts() {
  const totalCards = document.getElementsByClassName('products-card').length;
  currentProducts = (currentProductsIndex - 1 + totalCards) % totalCards;
  updateProductsCarousel();
}

function currentProducts(index) {
  currentProductsIndex = (index - 1) * 1;
  updateProductsCarousel();
}

document.addEventListener('DOMContentLoaded', () => {
  updateProductsCarousel();
});


// products filtering

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            cards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});

