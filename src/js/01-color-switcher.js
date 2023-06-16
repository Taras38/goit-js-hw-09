let intervalId;
const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

startBtn.addEventListener("click", function () {
    startBtn.disabled = true;  // disable the start button
    intervalId = setInterval(function () {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

stopBtn.addEventListener("click", function () {
    startBtn.disabled = false;  // enable the start button
    clearInterval(intervalId);
});