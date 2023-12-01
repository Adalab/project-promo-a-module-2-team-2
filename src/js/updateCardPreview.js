"use strict";

// Primero obtenemos las constantes del formulario

const inputName = document.querySelector(".js__inputName");
const inputJob = document.querySelector(".js__inputJob");
const inputMail = document.querySelector(".js__inputMail");
const inputPhone = document.querySelector(".js__inputPhone");
const inputLinkedin = document.querySelector(".js__inputLinkedin");
const inputGithub = document.querySelector(".js__inputGithub");
const errorPhone = document.querySelector(".js__errorPhone");

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
  cardLinkedin.href = inputLinkedin.value;
  cardGithub.href = inputGithub.value;
}

//SI EN PHONE NO PONEN NÚMEROS
//   if (typeof inputPhone.value === "number") {
//     cardPhone.innerHTML = inputPhone.value.toString();
//   } else {
//     errorPhone.textContent =
//       "Proporciona un número de teléfono correcto, por favor.";
//   }
//

//EVENTO PARA INPUTS FORMULARIO

inputName.addEventListener("input", updateCardPreview);
inputJob.addEventListener("input", updateCardPreview);
inputMail.addEventListener("input", updateCardPreview);
inputPhone.addEventListener("input", updateCardPreview);
inputLinkedin.addEventListener("input", updateCardPreview);
inputGithub.addEventListener("input", updateCardPreview);
