$("#carousel-call").load("/carousel.html", function() {
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    let autoSlideInterval = setInterval(() => {
        moveSlide(1);
    }, 10000);

    console.log("carousel loaded successfully")

    const itemCheck = document.getElementById('carousel-chevron-prev');
    console.log(itemCheck);

    $('#carousel-chevron-next').on('click', function() {
        // console.log('Nav item clicked in header!');
        moveSlide(1);
          console.log("Current slide index: " + currentSlideIndex);
          const prev = document.getElementById('carousel-chevron-prev');
          console.log("prev has been pressed.")
          prev.classList.toggle('closed');
    });

    $('#carousel-chevron-prev').on('click', function() {
      // console.log('Nav item clicked in header!');
        moveSlide(-1);
        console.log("Current slide index: " + currentSlideIndex);
        const prev = document.getElementById('carousel-chevron-prev');
        console.log("prev has been pressed.")
        prev.classList.toggle('closed');
    });
    

    $('#menu-btn-0').on('click', function() {
      // console.log('Dismiss clicked!');
        goToSlide(0);
        console.log(currentSlideIndex);
    });

    $('#menu-btn-1').on('click', function() {
        // console.log('Dismiss clicked!');
        goToSlide(1);
        console.log(currentSlideIndex);
    });
    
    $('#menu-btn-2').on('click', function() {
    // console.log('Dismiss clicked!');
        goToSlide(2);
        console.log(currentSlideIndex);
    });

    $('#menu-btn-3').on('click', function() {
    // console.log('Dismiss clicked!');
        goToSlide(3);
        console.log(currentSlideIndex);
    });

    // Function that updates the state of the carousel
    function updateCarousel() {
        updateSelectedState();
        const carousel = document.querySelector('.carousel');
        carousel.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
        resetAutoSlide();
        console.log("Current slide index movement:" + currentSlideIndex * 100);
    }

    // When provided a positive or negative integer, changes slides depending on positive or negative direction
    function moveSlide(direction) {
        currentSlideIndex = (currentSlideIndex + direction + totalSlides) % totalSlides;
        console.log("Move slide has been activated.");
        console.log("This is the direction: " + direction)
        console.log("This is slide index we are moving to: " + currentSlideIndex);
        updateCarousel();
        resetAutoSlide();
    }

    // When provided with an index, changes to slide with matching index value
    function goToSlide(index) {
        currentSlideIndex = index;
        console.log("Go to slide has been activated.")
        console.log(currentSlideIndex);
        updateCarousel();
        resetAutoSlide();
    }
    // Auto-rotate the carousel every 10 seconds
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            moveSlide(1);
        }, 10000);
    }

    function updateSelectedState() {
        let selectedButtons = document.querySelector('.menu-btn-selected');
        console.log("Selected buttons:" + selectedButtons);
        selectedButtons.classList.remove('menu-btn-selected');
        console.log("Button we are changing to: " + 'menu-btn-' + currentSlideIndex)
        let currentButton = document.getElementById('menu-btn-' + (currentSlideIndex));
        console.log(currentButton);
        currentButton.classList.add('menu-btn-selected');
    }

});





// let currentSlideIndex = 0;
// const slides = document.querySelectorAll('.carousel-slide');
// const totalSlides = slides.length;

// function moveSlide(direction) {
//     currentSlideIndex = (currentSlideIndex + direction + totalSlides) % totalSlides;
//     console.log("Move slide has been activated.");
//     console.log("This is the direction: " + direction)
//     console.log("This is slide index we are moving to: " + currentSlideIndex);
//     updateCarousel();
// }

// function goToSlide(index) {
//     currentSlideIndex = index;
//     console.log("Go to slide has been activated.")
//     updateCarousel();
// }

// function updateCarousel() {
//     const carousel = document.querySelector('.carousel');
//     carousel.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
// }

// // Auto-rotate the carousel every 5 seconds
// setInterval(() => {
//     moveSlide(1);
// }, 5000);