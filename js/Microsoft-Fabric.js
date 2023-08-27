$(document).ready(function() {
    var currentIndex = 0;
    var slides = $(".slide");
    var dots = $(".dot");
    var isDragging = false;
    var startPosX = 0;
    var endPosX = 0;

    function showSlide(index) {
        var slideWidth = $(".slider").width();
        var offset = -index * slideWidth;
        $(".slider").css("transform", "translateX(" + offset + "px)");
        dots.removeClass("active");
        dots.eq(index).addClass("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Initialize the slider
    showSlide(currentIndex);

    // Handle next button click
    $(".next-button").click(function() {
        nextSlide();
    });

    // Handle previous button click
    $(".prev-button").click(function() {
        prevSlide();
    });

    // Handle dot click
    dots.click(function() {
        currentIndex = dots.index(this);
        showSlide(currentIndex);
    });

    // Auto-slide functionality with a 5-second delay
    function autoSlide() {
        nextSlide();
    }

    var autoSlideInterval = setInterval(autoSlide, 5000); // 5 seconds

    // Mouse drag functionality (unchanged)
    $(".slider").on("mousedown", function(e) {
        isDragging = true;
        startPosX = e.pageX;
    });

    $(document).on("mousemove", function(e) {
        if (isDragging) {
            endPosX = e.pageX;
            var distance = endPosX - startPosX;

            // Check if the user dragged enough to change the slide
            if (Math.abs(distance) >= 50) {
                isDragging = false;
                if (distance > 0) {
                    prevSlide();
                } else {
                    nextSlide();
                }
            }
        }
    });

    $(document).on("mouseup", function() {
        isDragging = false;
    });
});