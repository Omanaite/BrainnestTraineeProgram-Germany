function compare(st, nd) {
  if (st > nd) {
    console.log("this is the largest number: " + st);
  } else if (st < nd) {
    console.log("this is the largest number: " + nd);
  } else if (st === nd) {
    console.log("these numbers are the same: " + st + " " + nd);
  }
}

function getNumbers() {
  let st = document.getElementById("firstnumber").value;
  let nd = document.getElementById("secondnumber").value;
  compare(st, nd);
}

function evenodd() {
  const number = prompt("Enter a number: ");

  if (number % 2 == 0) {
    console.log("The number is even.");
  } else {
    console.log("The number is odd.");
  }
}
