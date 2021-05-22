"use script"
window.onload = function(){
    let computeBtn = document.getElementById("compute")
   computeBtn.onclick = test; 

}

function test(){
let pickupDateField = document.getElementById("pickupDate");

console.log(pickupDateField.value)

}