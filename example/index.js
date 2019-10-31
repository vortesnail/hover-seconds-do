let box = document.querySelector('.box');

function hiddenTestBox() {
  let textBox = document.querySelector('.test-box');
  textBox.style.display = 'none';
  box.style.cursor = 'none';
}

function showTestBox() {
  let textBox = document.querySelector('.test-box');
  textBox.style.display = 'block';
  box.style.cursor = 'default';
}

let hoversd = new window.HoverSD(box, hiddenTestBox, 2000, showTestBox);
hoversd.secondsHoverEX();
// hoversd.removeElemEventListener();
