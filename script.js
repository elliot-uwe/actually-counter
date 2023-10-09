// JavaScript for the counter
const countElement = document.getElementById('count');
const incrementButton = document.getElementById('incrementBtn');

let count = 0;

incrementButton.addEventListener('click', () => {
    count++;
    countElement.textContent = count;
});