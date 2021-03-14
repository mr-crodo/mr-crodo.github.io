let click = 0;

let c = document.getElementById('canvas');
c.addEventListener('click', increment);
let ctx = c.getContext('2d');
let colors = [
  "rgb(0, 255, 255)", "rgb(255, 255, 0)", "rgb(255, 0, 255)", 'rgb(255, 0, 0)',
  'rgb(60, 179, 113)', 'rgb(106, 90, 205)', 'rgba(0, 103, 117, 0.81)', 'rgba(255, 99, 71, 0.4)', 'rgba(108, 72, 117, 0.81)', 'rgba(108, 220, 157, 0.81)'
];
var curr = c.style.backgroundColor;
var next = colors.indexOf(curr);


function increment(e) {
  var x = e.clientX - 240;
  var y = e.clientY - 160;
  let dist = Math.sqrt(y * y + x * x);
  if (dist < 50) {
    click++;
    next++;
    redraw();
  }

}

function redraw() {

  // c.style.backgroundColor = colors[next%colors.length];
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.font = "20px Verdana";
  ctx.fillText('Click: ' + click, 190, 20);
  ctx.beginPath();
  ctx.fillStyle = colors[next % colors.length];
  // ctx.fillStyle = ;
  ctx.arc(c.width / 2, c.height / 2, 50, 0, 2 * 3.14);
  ctx.fill();
}

redraw();