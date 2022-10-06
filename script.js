
function counter(button) {
    scoreboard[button]++;
    document.getElementById(`box${button}`).innerHTML = scoreboard[button];
}

let initialScore = 0;
let scoreboard = [];

let container = document.getElementById("container");
for (let i = 0; i < 10; i++) {
    scoreboard.push(initialScore);
    container.innerHTML += `<div class="box" id="box${i}" onclick="counter(${i})">${scoreboard[i]}</div>`;
}

