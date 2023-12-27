const autoText = document.querySelector('[data-text]');
const texts = 'cara legal';
let i = 0;

const auto = setInterval(setText, 200);
function setText() {
  autoText.innerText += texts[i].split('');
  i++;
  if (i === texts.length) {
    clearInterval(auto);
  }
}
