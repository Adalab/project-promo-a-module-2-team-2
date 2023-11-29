'use strict';

console.log('>> Ready :)');

const test = document.querySelector('.test');

const cardPreview = document.querySelector('.js__preview');

const palette1 = document.querySelector('.js__palette1');
const palette2 = document.querySelector('.js__palette2');
const palette3 = document.querySelector('.js__palette3');

palette1.addEventListener('click', (event) => {
    cardPreview.classList.remove('palette2');
    cardPreview.classList.remove('palette3');
    cardPreview.classList.add('palette1');
});

palette2.addEventListener('click', (event) => {
    cardPreview.classList.remove('palette1');
    cardPreview.classList.remove('palette3');
    cardPreview.classList.add('palette2');
});

palette3.addEventListener('click', (event) => {
    cardPreview.classList.remove('palette1');
    cardPreview.classList.remove('palette2');
    cardPreview.classList.add('palette3');
});