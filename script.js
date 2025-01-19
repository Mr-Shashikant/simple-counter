const countOutput = document.getElementById("count-show");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

let count = 0;

const updateVal = () => {
  countOutput.innerHTML = count;
};

updateVal();

const countUp = () => {
  count++;
  updateVal();
};

const countDown = () => {
  count--;
  updateVal();
};

const reset = () => {
  count = 0;
  updateVal();
};
