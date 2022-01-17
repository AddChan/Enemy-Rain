document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    moveLeft();
  } else if (event.key === 'ArrowRight') {
    // 왼쪽
    moveRight();
  } // 오른쪽
});

document.addEventListener('keyup', function(event) {
  moveStop();
});

moveLeft = () => {
  let heroMove = document.getElementsByClassName('hero')[0];
  var x = heroMove.offsetLeft;

  if (x >= 0) {
    heroMove.style.left = x - 3 + 'px';
  }
  heroMove.style.backgroundPosition = '-70px 0px';
};

moveRight = () => {
  let heroMove = document.getElementsByClassName('hero')[0];
  var x = heroMove.offsetLeft;

  if (x <= 764) {
    heroMove.style.left = x + 3 + 'px';
  }
  heroMove.style.backgroundPosition = '-105px 0px';
};

moveStop = () => {
  let heroMove = document.getElementsByClassName('hero')[0];
  heroMove.style.backgroundPosition = '0px 0px';
};
