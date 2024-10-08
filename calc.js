//all global  variables

//this is for displaying all the buttons and functions onto the screen 

function add (num1 , num2){
  return num1 +num2 ;
}

function subtract (num1, num2){
  return num1 -num2;
}

function multiply (num1, num2){
  return num1*num2;
}

function divide (num1, num2){
  if (num2==0)
    throw new Error ('Error:division by 0 is not allowed');
  return num1/ num2;
}

const answer = document.getElementById("answer");
const display = document.getElementById("question");
//to make the buttons appear on screen 