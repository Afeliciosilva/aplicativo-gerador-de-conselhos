const adviceButton = document.querySelector("button");
const adviceId = document.querySelector(".wrapper > p");
const adviceText = document.querySelector("blockquote");

window.onload = () => {
    getAdvice();
}

adviceButton.addEventListener('click', getAdvice);

function getAdvice () {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            const advice = data.slip;

            adviceText.innerHTML = `"${advice.advice}"`;
            adviceId.innerHTML = `#${advice.id}`;
        });
}