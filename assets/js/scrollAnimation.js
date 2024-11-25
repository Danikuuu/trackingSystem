document.addEventListener("DOMContentLoaded", function() {
    const scrollElements = document.querySelectorAll(".scrollElement");

    // Function to handle intersection events
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the animation class to the element
                entry.target.classList.add("scroll-animation");
                // Once the animation is triggered, unobserve the element
                observer.unobserve(entry.target);
            }
        });
    }

    // Create the Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.3 // Trigger when at least 50% of the element is in view
    });

    // Start observing each scrollElement
    scrollElements.forEach(element => {
        observer.observe(element);
    });
});



/*
document.addEventListener("DOMContentLoaded", function() {
    const scrollElements = document.querySelectorAll(".scrollElement");

    // Function to handle intersection events
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the animation class to the element
                entry.target.classList.add("scroll-animation");
                // Once the animation is triggered, unobserve the element
                observer.unobserve(entry.target);
            }
        });
    }

    // Create the Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5 // Trigger when at least 50% of the element is in view
    });

    // Check navigation type if you have specific conditions
    if (performance.navigation.type !== performance.navigation.TYPE_RELOAD) {
        // Start observing each scrollElement
        scrollElements.forEach(element => {
            observer.observe(element);
        });
    } else {
        // Logic for handling reloads if needed
        // For example, you can still observe elements if desired
        scrollElements.forEach(element => {
            observer.observe(element);
        });
    }
});
*/

