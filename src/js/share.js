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

// Compartir en Twitter

const twitterButton = document.querySelector(".js__shareButtonTwitter");

twitterButton.addEventListener("click", function (event) {
  event.preventDefault();

  const cardURL = shareLink.href;

  // Reemplazar espacios con %20 y otros caracteres especiales según sea necesario
  const tweetText =
    "¡Echa un vistazo a mi nueva tarjeta!: " + cardURL.replace(/ /g, "%20");

  const twitterIntentURL = "https://twitter.com/intent/tweet?text=" + tweetText;

  window.open(twitterIntentURL, "_blank");
});
