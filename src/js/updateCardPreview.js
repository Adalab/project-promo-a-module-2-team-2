"use strict";

// Primero obtenemos las constantes del formulario

const inputName = document.querySelector(".js__inputName");
const inputJob = document.querySelector(".js__inputJob");
const inputMail = document.querySelector(".js__inputMail");
const inputPhone = document.querySelector(".js__inputPhone");
const inputLinkedin = document.querySelector(".js__inputLinkedin");
const inputGithub = document.querySelector(".js__inputGithub");
const errorPhone = document.querySelector(".js__errorPhone");
const resetButton = document.querySelector(".js__reset_button");
const form = document.querySelector('.js__content_form');


// Segundo obtenemos las constantes de la tarjeta de vista previa

const cardName = document.querySelector(".js__cardName");
const cardJob = document.querySelector(".js__cardJob");
const cardMail = document.querySelector(".js__cardMail");
const cardPhone = document.querySelector(".js__cardPhone");
const cardLinkedin = document.querySelector(".js__cardLinkedin");
const cardGithub = document.querySelector(".js__cardGithub");

//Funcion para actualizar la vista previa

function updateCardPreview() {
  cardName.innerHTML = inputName.value || "Nombre Apellido";
  cardJob.innerHTML = inputJob.value || "Front-End developer";
  cardMail.href = "mailto:" + inputMail.value;
  cardPhone.href = "tel:" + inputPhone.value;
  const linkedinName = inputLinkedin.value;
  cardLinkedin.href = linkedinName ? `https://${linkedinName}` : "#";
  const githubUsername = inputGithub.value.replace("@", "");
  cardGithub.href = githubUsername
    ? `https://github.com/${githubUsername}`
    : "#";

  //update cardData object
  cardData.name = inputName.value;
  cardData.job = inputJob.value;
  cardData.phone = inputPhone.value;
  cardData.email = inputMail.value;
  cardData.linkedin = linkedinName;
  cardData.github = inputGithub.value;

  //save cardData to the local storage
  localStorage.setItem('cardData', JSON.stringify(cardData));

};

function updatecardData() {

}

//EVENTO PARA INPUTS FORMULARIO

inputName.addEventListener("input", updateCardPreview);
inputJob.addEventListener("input", updateCardPreview);
inputMail.addEventListener("input", updateCardPreview);
inputPhone.addEventListener("input", updateCardPreview);
inputLinkedin.addEventListener("input", updateCardPreview);
inputGithub.addEventListener("input", updateCardPreview);

resetButton.addEventListener('click', () => {

  // Reseteamos el formulario
  inputName.value = "";
  inputJob.value = "";
  inputMail.value = "";
  inputPhone.value = "";
  inputLinkedin.value = "";
  inputGithub.value = "";
  profileImage.style.backgroundImage = `url("https://placedog.net/240/200")`;
  profilePreview.style.backgroundImage = `url("")`;

  // Valores por defecto del formularioq
  cardName.innerHTML = "Nombre Apellido";
  cardJob.innerHTML = "Front-End developer";
  cardMail.href = "mailto:";
  cardPhone.href = "tel:";
  cardLinkedin.href = "";
  cardGithub.href = "";
  // Reseteamos los colores de la tarjeta
  cardPreview.classList.remove('palette2', 'palette3');
  palette1.click();

  cardData.name = "";
  cardData.job = "";
  cardData.phone = "";
  cardData.email = "";
  cardData.linkedin = "";
  cardData.github = "";
  cardData.palette = "1";
  cardData.photo = "";

  //save cardData to the local storage
  localStorage.setItem('cardData', JSON.stringify(cardData));
});

// CAMBIAR COLOR BOTON Y APARECER AVISO TARJETA CREADA

// Cambiar estilos del botón en Share y aparecer la seccion de tarjeta creada:

const ButtonClicked = document.querySelector('.js__buttonClicked');
const shareSection = document.querySelector('.js__share');

ButtonClicked.addEventListener('click', (event) => {
  event.preventDefault();
  //cambiar el color del button share 
  ButtonClicked.classList.add('button__clicked');
  //Mostrar la sección de Share 
  shareSection.classList.remove('share__hidden');
});