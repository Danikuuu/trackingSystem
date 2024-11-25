let backToTopBtn = document.getElementById("backToTopBtn");
window.onscroll = function() { // ito namn yung function kapag nag scroll down ka lalabas yung arrow up 
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

backToTopBtn.onclick = function() { //ito yung function ng pag scroll
    scrollToTop();
};

function scrollToTop() {
    document.body.scrollTop = 0; // para sa safari
    document.documentElement.scrollTop = 0; // para sa chrome, firefox, brave
}

