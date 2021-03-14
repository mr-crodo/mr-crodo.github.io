let click = 0;

let c = document.getElementById('canvas');
c.addEventListener('click', increment);
let ctx = c.getContext('2d');
// let colors = ["rgb(0, 255, 255)","rgb(255, 255, 0)","rgb(255, 0, 255)"];
// let z = 0;
let colors = "rgb(0, 255, z)";
console.log(colors);
var curr = c.style.backgroundColor;

var next = colors.indexOf(curr);
let z = 1;
  // z++;

function percentageToRGB(r,g,b) {
  
    var r = parseInt((r/100)*255);
    var g = parseInt((g/100)*255);
    var b = parseInt((b/100)*255);

    return "rgb("+ r +","+ g +","+ b +")";
}

console.log(percentageToRGB(z,z+2,z+1));
 

function increment(e) {
  var x = e.clientX - 240;
  var y = e.clientY - 160;
  let dist = Math.sqrt(y*y + x*x);
  if(dist < 50) {
    click++;
    // next++;
   
    redraw();
    console.log(percentageToRGB(z,z+2,z+1));
  }
  
}

function redraw() {
  
  // c.style.backgroundColor = colors[next%colors.length];
  ctx.clearRect(0,0,c.width,c.height);
  ctx.font="20px Verdana";
  ctx.fillText('Click: ' + click,190,20);
  ctx.beginPath();
  // ctx.fillStyle = colors[next%colors.length];
  z++;
  ctx.fillStyle = percentageToRGB(z,z+2,z+1);
  // ctx.fillStyle = ;
  ctx.arc(c.width / 2, c.height / 2, 50,0,2*3.14);
  ctx.fill();
}

redraw();