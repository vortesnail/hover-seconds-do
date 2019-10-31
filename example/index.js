let box = document.querySelector('.box');

function hiddenTestBox() {
  let textBox = document.querySelector('.test-box');
  textBox.style.display = 'none';
}

function showTestBox() {
  let textBox = document.querySelector('.test-box');
  textBox.style.display = 'block';
}

let hoversd = new window.HoverSD();
hoversd.secondsHoverEX(box, hiddenTestBox, 2000, showTestBox);
