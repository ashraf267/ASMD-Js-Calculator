//To change text

function changeText(x){
var demo = document.getElementById("demo");
if(x.value == "addition"){
demo.innerHTML = "Addition";
}
if(x.value == "subtraction"){
demo.innerHTML = "Subtraction";
}
if(x.value == "multiplication"){
demo.innerHTML = "Multiplication";
}
if(x.value == "division"){
demo.innerHTML = "Division";
}
}

function calcFun(){
var selValue = document.forms["myform"]["sel"].value;
var field01 = document.forms["myform"]["field01"].value;
var field02 = document.forms["myform"]["field02"].value;

//convert string to integer with the parseInt()

var field01 = parseInt(field01);
var field02 = parseInt(field02);
switch(selValue){
case "addition":
document.getElementById("output").innerHTML = field01 + field02;
break;
case "subtraction":
document.getElementById("output").innerHTML = field01 - field02;
break;
case "multiplication":
document.getElementById("output").innerHTML = field01 * field02;
break;
case "division":
document.getElementById("output").innerHTML = field01 / field02;
break;
default:
//Blank
break;
}
return false;
}

//Built by Ashraf Otagun