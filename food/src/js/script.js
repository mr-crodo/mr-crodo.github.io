const log = function (a, b, ...rest) {
  console.log(a, b, rest);
}

log(3, 12, 44, 23);


function calcOrDouble(number, basis = 2) {
  console.log(number * basis);
}

calcOrDouble(3);