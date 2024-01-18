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
  if (element.classList.contains("hidden")) {
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
  shareSection.classList.add('share__hidden');
});

arrowFormButton.addEventListener("click", (event) => {
  toggleContent(contentForm, iconFormButton);
  contentDesign.classList.add("hidden");
  contentShare.classList.add("hidden");
  iconDesignButton.classList.remove("button_rotate"); // Restablece el icono de Design
  iconShareButton.classList.remove("button_rotate"); // Restablece el icono de Share
  shareSection.classList.add('share__hidden');
});

arrowShareButton.addEventListener("click", (event) => {
  toggleContent(contentShare, iconShareButton);
  contentDesign.classList.add("hidden");
  contentForm.classList.add("hidden");
  iconDesignButton.classList.remove("button_rotate"); // Restablece el icono de Design
  iconFormButton.classList.remove("button_rotate"); // Restablece el icono de Form
  shareSection.classList.add("share__hidden");

  if (ButtonClicked.classList.contains("button__clicked")) {
    shareSection.classList.remove("share__hidden");
  }
});

// CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA

window.addEventListener("load", (event) => {
  contentDesign.classList.remove("hidden");
  iconDesignButton.classList.add("button_rotate");

  if (JSON.parse(localStorage.getItem('cardData'))) {
    cardData = JSON.parse(localStorage.getItem('cardData'));
    updatePalette()
    updateFormInput();
    updateCardPreview();
    updatePhoto();
  } else {
    palette1.click();
  }
});

function updatePalette() {
  const chosenPalette = cardData.palette;

  switch (chosenPalette) {
    case '2':
      palette2.click();
      break;
    case '3':
      palette3.click();
      break;
    default:
      palette1.click();
  }
}

function updateFormInput() {
  inputName.value = cardData.name;
  inputJob.value = cardData.job;
  inputMail.value = cardData.email;
  inputPhone.value = cardData.phone;
  inputLinkedin.value = cardData.linkedin;
  inputGithub.value = cardData.github;
}

function updatePhoto() {
  if (cardData.photo) {
    profileImage.style.backgroundImage = `url(${cardData.photo})`;
    profilePreview.style.backgroundImage = `url(${cardData.photo})`;
  }
}