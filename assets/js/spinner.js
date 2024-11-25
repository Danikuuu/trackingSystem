const spinnerWrapperEl = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
    spinnerWrapperEl.style.opacity = '0';

    setTimeout(() =>{
        spinnerWrapperEl.style.display = 'none';
    }, 500 );
});  


/*
const spinnerWrapperEl = document.querySelector('.spinner-wrapper');

function hideSpinner() {
    spinnerWrapperEl.style.opacity = '0';
    setTimeout(() => {
        spinnerWrapperEl.style.display = 'none';
    }, 500);
}

function checkConnection() {
    if (navigator.onLine) {
        hideSpinner();
    } else {
        spinnerWrapperEl.style.display = 'flex';
        spinnerWrapperEl.style.opacity = '1';
    }
}

window.addEventListener('load', () => {
    checkConnection();
});

window.addEventListener('online', hideSpinner);
window.addEventListener('offline', () => {
    spinnerWrapperEl.style.display = 'flex';
    spinnerWrapperEl.style.opacity = '1';
});
*/



 /*
const spinnerWrapperEl = document.querySelector('.spinner-wrapper');

function hideSpinner() {
    spinnerWrapperEl.style.opacity = '0';
    setTimeout(() => {
        spinnerWrapperEl.remove();
    }, 500);
}

function checkConnection() {
    if (navigator.onLine) {
        hideSpinner();
    } else {
        spinnerWrapperEl.style.display = 'flex';
        spinnerWrapperEl.style.opacity = '1';
    }
}

window.addEventListener('load', () => {
    checkConnection();
});

window.addEventListener('online', hideSpinner);
window.addEventListener('offline', () => {
    document.body.appendChild(spinnerWrapperEl);
    spinnerWrapperEl.style.display = 'flex';
    spinnerWrapperEl.style.opacity = '1';
});
*/




  