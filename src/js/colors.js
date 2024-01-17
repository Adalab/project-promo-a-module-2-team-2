'use strict';

const cardPreview = document.querySelector('.js__preview');

const palette1 = document.querySelector('.js__palette1');
const palette2 = document.querySelector('.js__palette2');
const palette3 = document.querySelector('.js__palette3');

const handleColors = (event) => {
  cardData.palette = event.currentTarget.value;

  //save cardData to the local storage
  localStorage.setItem('cardData', JSON.stringify(cardData));

  cardPreview.classList.remove('palette2', 'palette3');
  cardPreview.classList.add(`palette${event.currentTarget.value}`)
}

palette1.addEventListener('click', handleColors);

palette2.addEventListener('click', handleColors);

palette3.addEventListener('click', handleColors);