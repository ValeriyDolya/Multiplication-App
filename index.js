const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0
}

document.getElementById('questPart2').innerHTML = `${num1} by ${num2}?`;

const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');

const corectAnswer = num1 * num2;

formEl.addEventListener('submit', () => {
    // e.preventDefault()
    const answer = +inputEl.value
    // inputEl.value = ''
    if (answer === corectAnswer) {
        score++
        updateLocalStorage()
    }else{
        score--
        updateLocalStorage()
    } 
})

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}

document.getElementById('score').innerHTML = `score: ${score}`


