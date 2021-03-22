let startTime = new Date().getTime();

function getRandomColor() {
  let letter = '0123456789ABCDEF'.split('');
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

let makeShapeVisible = function () {
  let shape = document.getElementById('shape');
  let top = Math.random() * 300;
  let left = Math.random() * 200;
  let width = Math.random() * 200 + 50;
  let height = Math.random() * 200 + 50;
  shape.style.top = top + 'px';
  shape.style.left = left + 'px';
  shape.style.width = width + 'px';
  shape.style.height = height + 'px';

  if (Math.random() < 0.1) {
    shape.style.borderRadius = "50%";
    shape.style.backgroundColor = getRandomColor();
    shape.style.borderBottom = '0';
  } else if (Math.random() >= 0.1 && Math.random() <= 0.3) {
    shape.style.borderRadius = '0';
    shape.style.borderBottom = '0';
    shape.style.backgroundColor = getRandomColor();
  } else if (Math.random() > 0.3 && Math.random() <= 0.6) {
    shape.style.left = '0';
    shape.style.width = '0';
    shape.style.height = '0';
    shape.style.borderLeft = '50px solid transparent';
    shape.style.borderRight = '50px solid transparent';
    shape.style.borderBottom = '100px solid ' + getRandomColor();
    shape.style.backgroundColor = 'white';
  } else if (Math.random() > 0.6 && Math.random() <= 0.7) {
    shape.style.left = '0';
    shape.style.width = '0';
    shape.style.height = '0';
    shape.style.borderLeft = '50px solid transparent';
    shape.style.borderRight = '100px solid transparent';
    shape.style.borderBottom = '50px solid ' + getRandomColor();
    shape.style.backgroundColor = 'white';
  } else if (Math.random() > 0.7 && Math.random() <= 0.8) {
    shape.style.left = '0';
    shape.style.width = '0';
    shape.style.height = '0';
    shape.style.borderLeft = '100px solid transparent';
    shape.style.borderRight = '50px solid transparent';
    shape.style.borderBottom = '50px solid ' + getRandomColor();
    shape.style.backgroundColor = 'white';
  } else if (Math.random() > 0.7 && Math.random() <= 0.8) {
    shape.style.left = '0';
    shape.style.float = 'left';
    shape.style.width = '50px';
    shape.style.height = '50px';
    shape.style.shapeOutside = `polygon(
    0 0,
    100 % 0,
      100 % 20 % ,
      60 % 20 % ,
      60 % 100 % ,
      40 % 100 % ,
      40 % 20 % ,
      0 20 % )
  `;

    shape.style.clipPath = `polygon (
    0 0,
    100 % 0,
      100 % 20 % ,
      60 % 20 % ,
      60 % 100 % ,
      40 % 100 % ,
      40 % 20 % ,
      0 20 %
  )`;
  }


  shape.style.display = 'block';
  startTime = new Date().getTime();
}

setTimeout(makeShapeVisible, Math.random() * 1000);

document.getElementById('shape').onclick =
  function () {

    let shape = document.getElementById('shape');

    shape.style.display = 'none';

    let finishTime = new Date().getTime();
    let reactionTime = (finishTime - startTime) / 1000;
    document.getElementById('reactionTime').innerHTML = reactionTime + ' seconds';
    setTimeout(makeShapeVisible, Math.random() * 1000);
  }