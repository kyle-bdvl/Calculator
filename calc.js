//all global  variables
let firstNumber;
let secondNumber;
let step =0;
let operation;
let result=null;

// to not allow users to type stuff in the input area 
document.getElementById('display').
  disabled =true;

//the array for the calculations 
let numArray =[];
let secondNumArray =[];
//display 
let display= document.getElementById('display');

//this is for displaying all the buttons and functions onto the screen 

function getNumber(num){
  if(step===0 || step===1){
    numArray.push(num);
    step=1;
    firstNumber= Number(numArray.join('')); //merge into one string, then into number
    display.value= firstNumber;
  }
  else if (step ===2){
    secondNumArray.push(num);
    secondNumber = Number(secondNumArray.join(''));
    display.value=secondNumber;
  }
  
}

function getOperator(op){
  step =2 
  operation =op;
  display.value = operation;
  secondNumArray =[];
}
//to clear all 
let clearCalc =() =>{ 
  firstNumber = 0;
  secondNumber =0;
  step =0;
  operation = 0;
  result=null;
  numArray=[];
  secondNumArray=[];
  display.value =0;
  console.log('clear button is working');
}

let calculatorEquals = ()=>{
  if (result != null){
    firstNumber = result;
  }
  if (operation ==='+'){
    result = firstNumber + secondNumber;
    display.value = result;
  }

  else if (operation==='-'){
    result = firstNumber - secondNumber;
    display.value = result;
  }
  else if (operation ==='*'){
    result = firstNumber * secondNumber;
    display.value = result;
  }
  else {
    if (secondNumber === 0){
      throw new Error('cannot divide by zero ');
      
    }
    result = firstNumber / secondNumber;
    display.value = result;
  }
}

let divideBy100 = ()=> { 
  result = result / 100 ; 
  display.value = result
}

 


