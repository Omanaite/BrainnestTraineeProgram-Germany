function paste(n) { //Paste values into the calculator screen
  let visor = document.getElementById("number-container");
  let numberVisor = visor.textContent;
  if (numberVisor == 0) {
    document.getElementById("number-container").innerText = n;
  } else {
    document.getElementById("number-container").innerText = visor.textContent + n;
  }
}
function opencalculator(){
  document.getElementById("grid-container").classList.toggle("hidden");
}

function suma(op) {
  let visor = document.getElementById("number-container");
  let numberVisor = visor.textContent;
  numberVisor = numberVisor.substring(numberVisor.indexOf(op) + 1);
  document.getElementById("memory").innerText = numberVisor;
  document.getElementById("operator").innerText = op;
  document.getElementById("number-container").innerText = numberVisor + op;
}
function resta(op) {
  let visor = document.getElementById("number-container");
  let numberVisor = parseInt(visor.textContent);
  document.getElementById("memory").innerText = numberVisor;
  document.getElementById("operator").innerText = op;
  document.getElementById("number-container").innerText = numberVisor + op;
}
function multiplicacion(op) {
  let visor = document.getElementById("number-container");
  let numberVisor = parseInt(visor.textContent);
  document.getElementById("memory").innerText = numberVisor;
  document.getElementById("operator").innerText = op;
  document.getElementById("number-container").innerText = numberVisor + op;
}
function division(op) {
  let visor = document.getElementById("number-container");
  let numberVisor = parseInt(visor.textContent);
  document.getElementById("memory").innerText = numberVisor;
  document.getElementById("operator").innerText = op;
  document.getElementById("number-container").innerText = numberVisor + op;
}

function erase() {
    const isExecuted = confirm("Are you sure to execute this action?");
    let evaluate = isExecuted;
    if (isExecuted === true) {
      document.getElementById("memory").innerText = "";
      document.getElementById("operator").innerText = "";
      document.getElementById("number-container").innerText = 0;
    }
  }
  

function operate() {
    var str = document.getElementById("number-container").innerText;
    if (str !== 0) {
      const op = document.getElementById("operator").innerText;
      str = str.substring(str.indexOf(op) + 1);
      const n1 = parseFloat((document.getElementById("memory").innerText).replace(/,/g, "."));
      const n2 = parseFloat(str.replace(/,/g, "."));
   
      if (n2 != 0 || op != "/" || op != "" || n2 != null){
          let r = 0;
      if (op == "+") {
        r = parseFloat(n1) + parseFloat(n2);
      } else if (op == "-") {
        r = n1 - n2;
      } else if (op == "*") {
        r = n1 * n2;
      } else if (op == "/") {
        r = n1 / n2;
      }

      if(r.toString().length > 15 || r != "NaN"){
        document.querySelector("#number-container").innerHTML = Number(r).toFixed(1);
      }else{
        document.querySelector("#number-container").innerHTML = r;
      }
      
      }
      else
      {
          alert("¡¡¡ You cannot divide by zero !!!")
      }
      
    }
  
}
