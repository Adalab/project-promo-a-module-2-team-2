const createButton = document.querySelector(".js__content_share");
const shareLink = document.querySelector(".js__shareLink");
const shareErrorContainer = document.querySelector(".js__shareErrorContainer");
const shareLinkContainer = document.querySelector(".js__shareLinkContainer");

function handleClickCreate(event) {
  event.preventDefault();

  fetch("https://dev.adalab.es/api/card/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(cardData),
  })
    .then((response) => response.json())
    .then((dataResponse) => {
      if (dataResponse.success) {
        //Mostrar los enlaces en la página
        shareLinkContainer.classList.remove("hidden");

        shareLink.href = dataResponse.cardURL;
        shareLink.innerHTML = dataResponse.cardURL;
      } else {
        //Mostrar un mensaje de error
        shareErrorContainer.classList.remove("hidden");
        shareErrorContainer.innerHTML = dataResponse.error;
      }
    });
}

createButton.addEventListener("click", handleClickCreate);
