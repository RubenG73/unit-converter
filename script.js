const numberOutput = document.getElementById('number-container');
const btn = document.getElementById('btn');
let mtFt = document.getElementById('mt-ft');
let ltGl = document.getElementById('lt-gl');
let kgPnd = document.getElementById('kg-pnd');

function meterFeet() {
    let meterValue = numberOutput.value / 3.281;
    let feetValue = numberOutput.value * 3.281;
    let mtFtString = `${numberOutput.value} meters = ${feetValue.toFixed(3)} feet | ${numberOutput.value} feet = ${meterValue.toFixed(3)} meters`;
    mtFt.innerHTML = mtFtString;
}

function literGallon() {
    let literValue = numberOutput.value * 3.785;
    let gallonValue = numberOutput.value / 3.785;
    let ltGlString = `${numberOutput.value} liters = ${gallonValue.toFixed(3)}  gallons | ${numberOutput.value} gallons = ${literValue.toFixed(3)} liters`;
    ltGl.innerHTML = ltGlString;
}

function kilogramsPounds() {
    let kilogramValue = numberOutput.value / 2.205;
    let poundValue = numberOutput.value * 2.205;
    let kgPndString = `${numberOutput.value} kilos = ${poundValue.toFixed(3)}  pounds | ${numberOutput.value} pounds = ${kilogramValue.toFixed(3)} kilos`;
    kgPnd.innerHTML = kgPndString;
}

btn.addEventListener('click', meterFeet);
btn.addEventListener('click', literGallon);
btn.addEventListener('click', kilogramsPounds);