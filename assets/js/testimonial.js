$(document).ready(function(){
    // Initialize Owl Carousel
    var testimonialCarousel = $(".testimonial-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false, // Disable default dots
        autoplay: true,
        autoplayTimeout: 12000,
        slideTransition: 'linear', // Use 'linear' for a smooth slide effect
        smartSpeed: 500, // Smooth speed of sliding
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        },
        onInitialized: function(event){
            // Call addCustomDots function on carousel initialize
            addCustomDots(event);
            // Update active dot initially to the first dot
            updateActiveDot(event, 0);
            // Update testimonial item classes on initialization
            updateTestimonialClasses(event);

            // Add bg-primary class to the second testimonial item initially
            $('.testimonial-item').eq(1).addClass('bg-primary');
            $('.testimonial-item').eq(1).find('.testimonial-bg').addClass('bg-primary');
        },
        onChanged: function(event){
            // Calculate the correct active dot index
            var currentIndex = event.item.index - Math.floor(event.item.count / 2);
            if (currentIndex < 0) {
                currentIndex = event.item.count + currentIndex;
            }
            currentIndex = currentIndex % event.item.count;
            updateActiveDot(event, currentIndex);
            // Update testimonial item classes on change
            updateTestimonialClasses(event);
        }
    });

    function addCustomDots(event){
        var dots = $('.testimonial-carousel .owl-dots');
        var dotItems = dots.find('.owl-dot');
        var customDots = $('.custom-dots');

        // Clear existing custom dots
        customDots.empty();

        // Create custom dots based on the number of slides
        var numDots = event.item.count;
        for (var i = 0; i < numDots; i++) {
            var dot = $('<button>');
            dot.addClass('owl-dot');
            customDots.append(dot);
        }

        // Handle click event on custom dots
        customDots.on('click', '.owl-dot', function() {
            var index = $(this).index();
            testimonialCarousel.trigger('to.owl.carousel', index);
            updateActiveDot(event, index); // Update active dot on click
            // Reset autoplayTimeout
            testimonialCarousel.trigger('stop.owl.autoplay');//stop
            testimonialCarousel.trigger('play.owl.autoplay');
        });
    }

    function updateActiveDot(event, currentIndex){
        var dotItems = $('.custom-dots .owl-dot');
        dotItems.removeClass('active');
        dotItems.eq(currentIndex).addClass('active');
    }

    function updateTestimonialClasses(event){
        // Remove previous bg-primary and text-white classes from all testimonial-bg elements
        $('.testimonial-bg').removeClass('bg-primary');
        $('.testimonial-bg').removeClass('text-white');
        
        // Remove text-muted class from all h5 and p tags
        $('.testimonial-item h5, .testimonial-item p').removeClass('text-muted');

        // Remove opacity from all images
        $('.testimonial-item img').css('opacity', '');

        // Determine the current index based on screen size
        var current;
        if ($(window).width() >= 768) { // Medium or larger screens (Bootstrap md breakpoint)
            current = event.item.index + 1;
        } else { // Small screens
            current = event.item.index;
        }

        // Add bg-primary and text-white classes to the current middle testimonial-bg element
        $('.testimonial-item').eq(current).find('.testimonial-bg').addClass('bg-primary');
        $('.testimonial-item').eq(current).find('.testimonial-bg').addClass('text-white');

        // Add text-muted class to all h5 and p tags except the current active testimonial
        $('.testimonial-item').not(':eq(' + current + ')').find('h5, p').addClass('text-muted');

        // Set opacity for inactive images
        $('.testimonial-item').not(':eq(' + current + ')').find('img').css('opacity', '0.6');

         // Remove active class from all rating spans
         $('.testimonial-item .rating > span').removeClass('active');

         // Add active class to the rating spans of the current active testimonial
         $('.testimonial-item').eq(current).find('.rating > span').each(function(index) {
             $(this).css('--delay', index + 1); // Set animation delay based on index
             $(this).addClass('active');
         });
    }
});

//lower the opacity of p and h5