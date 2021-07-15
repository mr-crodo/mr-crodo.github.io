// function calculate(arr) {

//   for(let i =0; i < arr.length; i++) {
//     if(arr[i] > 0 && !arr[i] % 2 === 0) {
//       console.log(arr[i]);
//     }
//   }
// }

// calculate(7);

// console.log([5, 0, -5, 20, 88, 17, -32]);

// data = [data, {
//   "label": 2,
//   "value": 13
// }]

// console.log(data);

// ***************************************

var data = [{
    "label": "1",
    "value": 12
  },
  {
    "label": "1",
    "value": 12
  },
  {
    "label": "1",
    "value": 12
  },
];

data = [...data, {
  "label": "2",
  "value": 14
}]
console.log(data);

var lab = ["1", "2", "3", "4"];
var val = [42, 55, 51, 22];

//Using forEach()
var data = [];
val.forEach((v, i) =>
  data = [...data, {
    "label": lab[i],
    "value": v
  }]
)

//Using map()
var dataMap = val.map((v, i) =>
  ({
    "label": lab[i],
    "value": v
  })
)

console.log('data: ', data);
console.log('dataMap : ', dataMap);