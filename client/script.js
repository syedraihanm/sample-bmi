async function calculateBMI(){

let height=document.getElementById("height").value;
let weight=document.getElementById("weight").value;

const response = await fetch("http://localhost:5000/bmi",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
height:height,
weight:weight
})

});

const data = await response.json();

document.getElementById("bmiResult").innerText =
"BMI: "+data.bmi;

document.getElementById("bmiCategory").innerText =
data.category;

}