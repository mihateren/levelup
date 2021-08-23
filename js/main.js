'use strict'

// слайдер комментов

$(document).ready(function() {
    $('.comments__slider').bxSlider({
        mode: 'vertical',
        speed: 600,
        responsive: true,
        pager: false,
        infiniteLoop: true
    });
});

// таймер

let timer = new DPTimerCookie({
    htmlLayouts: [{
        selector: "#myTimer1",
        display: "block"
    }],
    lifeDurationCookieDays: 10,
    cookieIdForTimer: "id1111",
    timers: [{
        duration: {
            days: 0,
            hours: 0,
            minutes: 30,
            seconds: 0
        }
    }]
});
timer.start();


// ввод чисел в input

$(document).ready(function() {

    $("#phone-input").keydown(function(event) {
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            (event.keyCode == 65 && event.ctrlKey === true) ||
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            return;
        } else {
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });
});

// всплывающая подсказка в input

const inputs = document.querySelectorAll('input');
const hints = document.querySelectorAll('.feedback__form-hint')

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', function() {
        hints[i].classList.toggle('feedback__form-hint--active');
    })
    inputs[i].addEventListener('focusout', function() {
        hints[i].classList.toggle('feedback__form-hint--active');
    })
}

// скролл до формы

const btns = document.querySelectorAll('.scroll-btn');
const form = document.getElementById('formScroll');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        const topOffset = form.offsetHeight;
        const elementPosition = form.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
}