let btnData = document.querySelector(".get-joke");

function getData() {
  fetch("https://icanhazdadjoke.com/slack")
    .then((response) => {
      return response.json();
    })
    .then(
      (data) =>
        (document.querySelector(".joke").textContent = data.attachments[0].text)
    );
}

btnData.addEventListener("click", getData);
