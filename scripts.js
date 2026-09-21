/* ============================================================
   THEME TOGGLE: LIGHT MODE <-> DARK MODE
   ------------------------------------------------------------
   The button holds BOTH icons (unicode sun + SVG moon); CSS
   shows the correct one based on body.dark-mode, so this
   script only has to flip the class and update the aria-label.
   ============================================================ */

const themeButton = document.getElementById("theme-toggle");

if (themeButton) {
  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    themeButton.setAttribute(
        "aria-label",
        isDark ? "Switch to Light Mode" : "Switch to Dark Mode"
    );
  });
}


/* ============================================================
   JAVASCRIPT CALCULATOR
   ============================================================ */

const firstNumberInput = document.getElementById("first-number");
const secondNumberInput = document.getElementById("second-number");
const outputTag = document.getElementById("output");

function getNumbers() {
  const first = Number(firstNumberInput.value);
  const second = Number(secondNumberInput.value);
  return [first, second];
}

function showResult(result) {
  outputTag.innerHTML = String(result);
  if (result < 0) {
    outputTag.classList.add("negative");
  } else {
    outputTag.classList.remove("negative");
  }
}

function addition() {
  const n = getNumbers();
  showResult(n[0] + n[1]);
}

function subtraction() {
  const n = getNumbers();
  showResult(n[0] - n[1]);
}

function multiplication() {
  const n = getNumbers();
  showResult(n[0] * n[1]);
}

function division() {
  const n = getNumbers();
  showResult(n[0] / n[1]);
}

/* POWER — for() loop only; no Math.pow(), no ** */
function power() {
  const n = getNumbers();
  const base = n[0];
  const exponent = n[1];

  let result = 1;
  const steps = Math.abs(exponent);

  for (let i = 0; i < steps; i++) {
    result = result * base;
  }

  if (exponent < 0) {
    result = 1 / result;
  }

  showResult(result);
}

function clearCalc() {
  firstNumberInput.value = "";
  secondNumberInput.value = "";
  outputTag.innerHTML = "";
  outputTag.classList.remove("negative");
}