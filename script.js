const answer = document.getElementById("answer")
const increaseBtn = document.getElementById("increaseBtn")
const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const task = document.getElementById("task")
let count = 0;

increaseBtn.onclick = () => {
    count++;
    answer.textContent = count;
    task.textContent = "INCREASING..."
}

decreaseBtn.onclick = () => {
    count--;
    answer.textContent = count;
    task.textContent = "DECREASING..."
}

resetBtn.onclick = () => {
    count = 0;
    answer.textContent = count;
    task.textContent = "CALCULATOR"
}