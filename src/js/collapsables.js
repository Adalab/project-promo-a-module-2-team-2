'use strict';

//QUERY SELECTORS
const arrowButton = document.querySelector('.js__arrow_button');
const contentDesign = document.querySelector('.js__content_design');
const contentForm = document.querySelector('.js__content_form');
const contentButton = document.querySelector('.js__content_button');


// FUNCIONES
const toggleContent = (arrowButton) => {
    arrowButton.classList.toggle('collapsed');
};


// EVENTO
arrowButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Click en el botón de flecha');
  toggleContent(contentDesign);
  toggleContent(contentForm);
  toggleContent(contentButton);
});




