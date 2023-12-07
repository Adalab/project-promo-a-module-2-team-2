'use strict';

//QUERY SELECTORS
const arrowDesignButton = document.querySelector('.js__arrow_designbutton');
const arrowFormButton = document.querySelector('.js__arrow_formbutton');
const arrowShareButton = document.querySelector('.js__arrow_sharebutton');
const contentDesign = document.querySelector('.js__content_design');
const contentForm = document.querySelector('.js__content_form');
const contentShare = document.querySelector('.js__content_share');
const iconDesignButton = document.querySelector('.js__icon_design');
const iconFormButton = document.querySelector('.js__icon_form');
const iconShareButton = document.querySelector('.js__icon_share');


// FUNCIONES
const toggleContent = (element,icon) => {
    element.classList.toggle('hidden');
    icon.classList.toggle ('button_rotate');
};

// EVENTO
arrowDesignButton.addEventListener('click',(event)=> {
    event.preventDefault();
  toggleContent(contentDesign,iconDesignButton);
});

arrowFormButton.addEventListener('click',(event)=> {
  event.preventDefault();
toggleContent(contentForm,iconFormButton);
});

arrowShareButton.addEventListener('click',(event)=> {
  event.preventDefault();
toggleContent(contentShare,iconShareButton);
});




