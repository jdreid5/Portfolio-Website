const arrow = document.querySelector('#arrow');

function moveDown() {
    arrow.style.animationPlayState = 'paused';
    window.scrollTo({
        top: 650,
        left: 0,
        behavior: 'smooth'
      });
}

function cursorChange() {
    this.style.cursor = 'pointer';
}

document.querySelector('#onclick').onclick = moveDown;
document.querySelector('#onclick').onmouseover = cursorChange;


