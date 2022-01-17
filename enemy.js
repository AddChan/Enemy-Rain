class Enemy {
  constructor(randomX, number) {
    this.randomX = randomX;
    this.stop = false;
    this.number = number;
  }

  createEnemy() {
    let enemy = document.createElement('div');
    enemy.className = 'enemy';
    enemy.style.left = this.randomX + 'px';
    enemy.style.top = 0;
    document.getElementsByClassName('screen')[0].appendChild(enemy);
  }

  moveEnemy(randomX, i) {
    let hero = document.getElementsByClassName('hero')[0];
    let enemy = document.getElementsByClassName('enemy')[i];
    var x = hero.offsetLeft;
    var y = enemy.offsetTop;

    var x1 = x - 35;
    var x2 = x + 35;

    if (this.stop === false) {
      if (y <= 550 && y >= 500 && x1 <= randomX && x2 >= randomX) {
        enemy.style.backgroundPosition = '-45px 0px';
        this.stop = true;
      } else if (y < 550) {
        enemy.style.top = y + 1 + 'px';
      } else {
        this.stop = true;
      }
    }
  }
}

async function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

window.onload = async function() {
  for (i = 0; i < 10; i++) {
    let randomX = Math.floor(Math.random() * 760);
    const enemy = new Enemy(randomX, i);
    enemy.createEnemy();

    const moved = setInterval(function() {
      enemy.moveEnemy(randomX, enemy.number);
      if (enemy.stop) {
        clearInterval(moved);
      }
    }, 10);
    await delay(1000);
  }
};
