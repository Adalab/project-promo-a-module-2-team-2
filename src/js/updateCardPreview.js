'use strict'


// Primero obtenemos las constantes del formulario

const inputName = document.querySelector('.js__inputName');
const inputJob = document.querySelector('.js__inputJob');

// Segundo obtenemos las constantes de la tarjeta de vista previa

const cardName = document.querySelector('.js__cardName');
const cardJob = document.querySelector('.js__cardJob');

//Funcion para actualizar la vista previa

function updateCardPreview() {
    cardName.innerHTML = inputName.value || 'Nombre Apellido';
    cardJob.innerHTML = inputJob.value || 'Front-End developer';
}

//EVENTO PARA EL INPUT DEL NOMBRE

inputName.addEventListener('input', updateCardPreview);

//EVENTO PARA EL INPT DEL PUESTO 

inputJob.addEventListener('input', updateCardPreview);