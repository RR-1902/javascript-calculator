const display = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");
let firstValue = 0;
let flag= false;
let operatorValue= "";
function AddNumberValue(number){
  if (flag){
    display.textContent = number;
    flag= false;
    } else{
    const disvalue = display.textContent;
    display.textContent = 
      (disvalue === "0") ? number : disvalue + number;    
} }

const calculate = {
  "/": (firstValue, secondValue) => firstValue / secondValue,
  "*": (firstValue, secondValue) => firstValue * secondValue,
  "+": (firstValue, secondValue) => firstValue + secondValue,
  '-':(firstValue,secondValue)=> firstValue - secondValue,
  '=':(firstValue,secondValue)=> secondValue
}


function useOperator(operator){
  const currentValue = Number(display.textContent);
  if(operatorValue && flag){
    operatorValue = operator;
    }
  if(!firstValue){
      firstValue= currentValue;}
  else{
      const calculation = calculate[operatorValue](firstValue,currentValue);
      display.textContent = calculation;
      firstValue = calculation;
    }
  flag= true;
  operatorValue = operator;
}

function resetAll(){
  display.textContent = "0";
  flag= false;
  operatorValue= "";
  calculation= 0;
  firstValue= 0;

}
function addDecimal(decimal){
  if(flag){
    return;
  }
  if(!display.textContent.includes(".")){
    display.textContent = `${display.textContent}.`;
  }

}

inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0){
    inputBtn.addEventListener("click",()=> AddNumberValue(inputBtn.value))
  } else if(inputBtn.classList.contains("operator")){
    inputBtn.addEventListener("click",()=>useOperator(inputBtn.value))
  } else if(inputBtn.classList.contains("decimal")){
    inputBtn.addEventListener("click",()=>addDecimal(inputBtn.value))
    
  }

});

clearBtn.addEventListener("click",resetAll);
