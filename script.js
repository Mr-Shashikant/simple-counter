const countOutput = document.getElementById("count-show");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

let count = 0;
countOutput.innerHTML = count;

const countUp = () => {
    count++;
    countOutput.innerHTML = count;
}

const countDown = () => {
    count--;
    countOutput.innerHTML = count;
}