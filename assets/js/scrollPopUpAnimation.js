document.addEventListener("DOMContentLoaded", function() {
    const scrollPopUpElements = document.querySelectorAll(".scrollPopUpElement");

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("popup-animation");
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.3  // Trigger animation when fully visible
    });

    scrollPopUpElements.forEach(element => {
        observer.observe(element);
    });
});


