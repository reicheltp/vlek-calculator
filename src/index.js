import "./styles.css";

let currentNumber = 0;
let result = 0;
let operation = undefined;

const resultEl = document.querySelector(".calc-result");

function updateUI() {
  resultEl.textContent = currentNumber;
}

/**
 * Appends a new digit at the right side of the currentNumber.
 * @param {number} num -
 */
function appendDigit(num) {
  currentNumber = currentNumber * 10 + num;

  updateUI();
}

/**
 * Resets everything
 */
function c() {
  currentNumber = 0;
  result = 0;
  operation = undefined;

  updateUI();
}

/**
 * Resets current number
 */
function ce() {
  currentNumber = 0;

  updateUI();
}

function add() {
  /**
   * If a current operation is in progress we execute this operation and continue.
   *
   * If no operation is in progress we have to start with the current number.
   */
  if (operation) {
    operation();
  } else {
    result = currentNumber;
  }

  operation = () => (result = result + currentNumber);
  currentNumber = 0;

  updateUI();
}

function getResult() {
  if (operation) {
    operation();
  }

  operation = undefined;

  currentNumber = result;

  updateUI();
}

global.calculator = {
  c,
  ce,
  appendDigit,
  add,
  getResult
};
