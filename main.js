const text =
  "few light taps upon the pane made him turn to the window. It had begunto snow again. He watched sleepily the flakes, silver and dark, fallingobliquely against the lamplight. The time had come for him to set out onhis journey westward.";
const textArray = text.split("");
const quote = document.getElementById("quote");
const answer = document.getElementsByTagName("textarea")[0];
const charElement = document.getElementsByClassName("char");
answer.maxLength = textArray.length
let winState = false;
window.onload = function () {
  answer.focus();
};

for (let i = 0; i < textArray.length; i++) {
  const span = document.createElement("span");
  quote.appendChild(span);
  span.textContent = textArray[i];
  span.classList.add("char");
}
answer.addEventListener("input", () => {
  if (winState) {
    return;
  }
  const answerText = answer.value.split("");
  for (let i = 0; i < charElement.length; i++) {
    charElement[i].classList.remove("correct");
    charElement[i].classList.remove("incorrect");
  }
  for (let i = 0; i < answerText.length; i++) {
    if (answerText[i] === charElement[i].textContent) {
      charElement[i].classList.add("correct");
      charElement[i].classList.remove("incorrect");
    } else {
      charElement[i].classList.add("incorrect");
      charElement[i].classList.remove("correct");
    }
  }
  if (
    Array.from(charElement).every((element) =>
      element.classList.contains("correct")
    )
  ) {
    winState = true;
  }
  if (winState) {
    answer.setAttribute("readonly", "true");
    answer.style.backgroundColor = "#DDD";
    let result = document.createElement("p");
    answer.after(result);
    result.style.cssText = "margin-top: 10px; text-align: center;";
    result.innerHTML = `You Won!`
  }
});
