const handleKeydownLeft = () => {
  let heroMove = document.getElementsByClassName('hero')[0];
  var x = heroMove.offsetLeft;

  if (x >= 0) {
    heroMove.style.left = x - 3 + 'px';
  }
  heroMove.style.backgroundPosition = '-70px 0px';
};

const handleKeydownRight = () => {
  let heroMove = document.getElementsByClassName('hero')[0];
  var x = heroMove.offsetLeft;

  if (x <= 764) {
    heroMove.style.left = x + 3 + 'px';
  }
  heroMove.style.backgroundPosition = '-105px 0px';
};

const handleKeydownUp = () => {
  let heroMove = document.getElementsByClassName('hero')[0];
  heroMove.style.backgroundPosition = '0px 0px';
};

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    handleKeydownLeft();
  }
  if (event.key === 'ArrowRight') {
    handleKeydownRight();
  }
  if (event.key === 'ArrowUp') {
    handleKeydownUp();
  }
});
