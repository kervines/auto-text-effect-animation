const autoText = document.querySelector('[data-text]');
const texts = ['a Programmer', 'a Developer FrontEnd', '@kervines.dev'];
let charIndex = 0;
let textArrayIndex = 0;

setInterval(setText, 400);
function setText() {
  autoText.innerText += texts[textArrayIndex].charAt(charIndex);
  charIndex++;
  if (charIndex === texts[textArrayIndex].length + 1) {
    autoText.innerText = '';
    charIndex = 0;
    textArrayIndex++;
  }
  if (textArrayIndex === texts.length) {
    textArrayIndex = 0;
  }
}
