class Enemy {
  constructor(randomX, number) {
    this.randomX = randomX;
    this.stop = 'false';
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
    let heroMove = document.getElementsByClassName('hero')[0];
    var x = heroMove.offsetLeft;

    let enemyMove = document.getElementsByClassName('enemy')[i];
    var y = enemyMove.offsetTop;

    var x1 = x - 35;
    var x2 = x + 35;

    if (y <= 550 && y >= 500 && this.stop === 'false') {
      if (x1 <= randomX && x2 >= randomX && this.stop === 'false') {
        enemyMove.style.backgroundPosition = '-45px 0px';
        this.stop = 'true';
      } else if (y < 550) {
        enemyMove.style.top = y + 1 + 'px';
      }
    } else if (this.stop === 'false') {
      enemyMove.style.top = y + 1 + 'px';
    } else if (y > 550 && y < 560) {
      this.stop = 'true';
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
    setInterval(function() {
      enemy.moveEnemy(randomX, enemy.number);
    }, 10);
    await delay(1000);
  }
};
