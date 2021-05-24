document.querySelector("#btn15").addEventListener("click", calc);
document.querySelector("#btn175").addEventListener("click", calc);
document.querySelector("#btn20").addEventListener("click", calc);
document.querySelector("#btncalculate").addEventListener("click", calc);

function calc(event) {
  let tipPercentage = 0;
  let buttonPressed = event.target.id;

  switch (buttonPressed) {
    case "btn15":
      tipPercentage = 0.15;
      break;
    case "btn175":
      tipPercentage = 0.175;
      break;
    case "btn20":
      tipPercentage = 0.2;
      break;
    case "btncalculate":
      tipPercentage = document.getElementById("customTip").value / 100;
  }

  let billAmount = document.getElementById("billAmount").value;
  billAmount = parseFloat(billAmount);
  let tip = billAmount * tipPercentage;
  let total = tip + billAmount;
  reportTotals(tip, total);
}

function reportTotals(tip, total) {
  tip = tip.toFixed(2);
  total = total.toFixed(2);
  document.getElementById("tipAmount").innerHTML = "<strong> $ " + tip + "</strong>";
  document.querySelector("#total").innerHTML = `<strong> $ ${total}</strong>`;
}