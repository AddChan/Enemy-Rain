class Enemy {
  constructor(randomX,top){
    this.randomX = randomX;
    this.top = top;
    this.stop = 'false';
  }

  createEnemy(){
    let enemy = document.createElement('div');
    enemy.className = "enemy";
    enemy.style.left= this.randomX+'px';
    enemy.style.top= this.top+'px';
    document.getElementsByClassName('Screen')[0].appendChild(enemy);    
  }

  move(i,randomX) {
    let heroMove = document.getElementsByClassName("hero")[0];
    var x = heroMove.offsetLeft;

    let enemyMove = document.getElementsByClassName('enemy')[i];
    var y = enemyMove.offsetTop;
    
    var x1 = x-35;
    var x2 = x+35;

    if(y <= 550 && y >= 500 && this.stop ==='false'){
          if( x1 <= randomX && x2 >= randomX  && this.stop ==='false'){
              enemyMove.style.backgroundPosition="-45px 0px";
              this.stop='true';
            }
          else if(y < 550){
              enemyMove.style.top = (y+1)+"px";
            }
        }
    else if(this.stop ==='false') {  
      enemyMove.style.top = (y+1)+"px";
    }
    else if(y > 550 && y < 560){
      this.stop='true';
    }
  }
}

window.onload = function(){
    var i =0;
    
  var refreshIntervalId = setInterval(function() {
      eval("_en"+(i+1))();
      i++;
      if(i == 9){
        clearInterval(refreshIntervalId);
      }   
    }, 1000);
}

//en1 대신에 더 좋은 방법이 없을까
_en1 = () => {
  let randomX = Math.floor(Math.random() * 760);
    const en1 = new Enemy(randomX,0);
    en1.createEnemy();

     setInterval(function() {
        en1.move(0,randomX);
      }, 10);
}

_en2 = () => {
  let randomX = Math.floor(Math.random() * 760);
    const en2 = new Enemy(randomX,0);

    en2.createEnemy();
    setInterval(function() {
      en2.move(1,randomX);
    }, 10);
}

_en3 = () => {
  let randomX = Math.floor(Math.random() * 760);
    const en3 = new Enemy(randomX,0);

    en3.createEnemy();
    setInterval(function() {
      en3.move(2,randomX);
    }, 10);
}

_en4 = () => {
  let randomX = Math.floor(Math.random() * 760);
    const en4 = new Enemy(randomX,0);

    en4.createEnemy();
    setInterval(function() {
      en4.move(3,randomX);
    }, 10);
}

_en5 = () => {
  let randomX = Math.floor(Math.random() * 760);
    const en5 = new Enemy(randomX,0);

    en5.createEnemy();
    setInterval(function() {
      en5.move(4,randomX);
    }, 10);
}

_en6 = () => {
  let randomX = Math.floor(Math.random() * 760);
    const en6 = new Enemy(randomX,0);

    en6.createEnemy();
    setInterval(function() {
      en6.move(5,randomX);
    }, 10);
}

_en7 = () => {
  let randomX = Math.floor(Math.random() * 760);
    const en7 = new Enemy(randomX,0);

    en7.createEnemy();
    setInterval(function() {
      en7.move(6,randomX);
    }, 10);
}

_en8 = () => {
  let randomX = Math.floor(Math.random() * 760);
    const en8 = new Enemy(randomX,0);

    en8.createEnemy();
    setInterval(function() {
      en8.move(7,randomX);
    }, 10);
}

_en9 = () => {
  let randomX = Math.floor(Math.random() * 760);
    const en9 = new Enemy(randomX,0);

    en9.createEnemy();
    setInterval(function() {
      en9.move(8,randomX);
    }, 10);
}
