const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');
// obrobotcik sobitiya s najatiem knopki
document.addEventListener('keydown', function(event) {
  jump();
});

function jump() {
  if(dino.classList != 'jump') {
    dino.classList.add('jump');
  } 
    setTimeout(function() {
      dino.classList.remove('jump');
  }, 300);
}

let isAlive = setInterval(function() {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

  if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert('Game Over !!');
  }
}, 10);