"use strict";

//QUERY SELECTORS
const arrowDesignButton = document.querySelector(".js__arrow_designbutton");
const arrowFormButton = document.querySelector(".js__arrow_formbutton");
const arrowShareButton = document.querySelector(".js__arrow_sharebutton");
const contentDesign = document.querySelector(".js__content_design");
const contentForm = document.querySelector(".js__content_form");
const contentShare = document.querySelector(".js__content_share");
const iconDesignButton = document.querySelector(".js__icon_design");
const iconFormButton = document.querySelector(".js__icon_form");
const iconShareButton = document.querySelector(".js__icon_share");

// FUNCIONES

const toggleContent = (element, icon) => {
  if (!element.classList.contains("hidden")) {
    element.classList.add("hidden");
    icon.classList.remove("button_rotate");
  } else {
    element.classList.remove("hidden");
    icon.classList.add("button_rotate");
  }
};

// EVENTOS

arrowDesignButton.addEventListener("click", (event) => {
  toggleContent(contentDesign, iconDesignButton);
  contentForm.classList.add("hidden");
  contentShare.classList.add("hidden");
  iconFormButton.classList.remove("button_rotate"); // Restablece el icono de Form
  iconShareButton.classList.remove("button_rotate"); // Restablece el icono de Share
});

arrowFormButton.addEventListener("click", (event) => {
  toggleContent(contentForm, iconFormButton);
  contentDesign.classList.add("hidden");
  contentShare.classList.add("hidden");
  iconDesignButton.classList.remove("button_rotate"); // Restablece el icono de Design
  iconShareButton.classList.remove("button_rotate"); // Restablece el icono de Share
});

arrowShareButton.addEventListener("click", (event) => {
  toggleContent(contentShare, iconShareButton);
  contentDesign.classList.add("hidden");
  contentForm.classList.add("hidden");
  iconDesignButton.classList.remove("button_rotate"); // Restablece el icono de Design
  iconFormButton.classList.remove("button_rotate"); // Restablece el icono de Form
  shareSection.classList.add("share__hidden");
});

// CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA
window.addEventListener("load", (event) => {
  contentDesign.classList.remove("hidden");
});


// Funcion para que la persona no pueda cerrar el desplegable, que no se ejecute el click a no ser que abra otro. 