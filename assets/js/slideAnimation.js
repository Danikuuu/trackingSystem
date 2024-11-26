window.onload = function() {
    var title = document.getElementById("title1");
    title.classList.add("slide-in1");
    title.addEventListener("animationend", function() {
        title.style.animation = "none"; //para matangal yung animation
    });

    var title2 = document.getElementById("title2");
    title2.classList.add("slide-in2");
    title2.addEventListener("animationend", function() {
        title2.style.animation = "none"; //para matangal yung animation
    });

    var title3 = document.getElementById("title3");
    title3.classList.add("slide-in3");
    title3.addEventListener("animationend", function() {
        title3.style.animation = "none"; //para matangal yung animation
    });

    var title4 = document.getElementById("title4");
    title4.classList.add("slide-in4");
    title4.addEventListener("animationend", function() {
        title4.style.animation = "none"; //para matangal yung animation
    });

    var title5 = document.getElementById("title5");
    title5.classList.add("slide-in5");
    title5.addEventListener("animationend", function() {
        title5.style.animation = "none"; //para matangal yung animation
    });
};