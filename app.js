"use script"
window.onload = function(){
    let totalCostBtn = document.getElementById("totalCostBtn")
    totalCostBtn.onclick = totalCostBtnClicked; 

}

function totalCostBtnClicked(){
let numberOfDaysField = document.getElementById("numberOfDays");

let numberOfDays = Number(numberOfDaysField.value);

let carRental = 29.99 * numberOfDays;

let options = 0;

console.log(numberOfDaysField)
console.log(numberOfDays, carRental, options)

const electronicCheckbox = document.getElementById("electronicTollTag");
    if (electronicCheckbox.checked == true) {
        options += (3.95 * numberOfDays);
    }

const gpsCheckbox = document.getElementById("GPS");
    if (gpsCheckbox.checked == true) {
        options += (2.95 * numberofDays);
    }
    
const roadsideCheckbox = document.getElementById("roadsideAssistance");
    if (roadsideCheckbox.checked == true) {
        options += (2.95 * numberofDays);
    }

    let surcharge = 0;

    const radioYesBtn = document.getElementById("radioYes")
    if (radioYesBtn.checked == true) {
        surcharge = carRental * .30;
    }

    let totalCost = carRental + options + surcharge;

    console.log(numberOfDays, carRental, options, totalCost)

    const carRentalPara = document.getElementById("carRental");
    carRentalPara.innerHTML = "Car rental: " + carRental.toFixed(2);

    const optionsPara = document.getElementById("options");
    optionsPara.innerHTML = "Options " + options.toFixed(2);

    const surchargePara = document.getElementById("surcharge");
    surchargePara.innerHTML = "Under 25 Surcharge: " + surcharge.toFixed(2);
 
    const totalCostPara = document.getElementById("totalCost");
    totalCostPara.innerHTML = "Total due: " + totalCost.toFixed(2);
}
