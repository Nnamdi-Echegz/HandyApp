const footInput = document.getElementById('Footinput');
const centimeterInput = document.getElementById('centimetersInput');


footInput.addEventListener('input', convertFootToCentimeter);
centimeterInput.addEventListener('input', convertCentimeterToFoot);


function convertFootToCentimeter() {
  const footValue = parseFloat(footInput.value);
  if (!isNaN(footValue)) {
    const centimeterValue = footValue * 30.48; 
    centimeterInput.value = centimeterValue.toFixed(2);
  } else {
    centimeterInput.value = '';
  }
}


function convertCentimeterToFoot() {
  const centimeterValue = parseFloat(centimeterInput.value);
  if (!isNaN(centimeterValue)) {
    const footValue = centimeterValue / 30.48;
    footInput.value = footValue.toFixed(2);
  } else {
    footInput.value = '';
  }
}



const centimetersInput = document.getElementById('centimetersInputTwo');
const inchesInput = document.getElementById('inchesInput');


centimetersInput.addEventListener('input', convertCentimetersToInches);
inchesInput.addEventListener('input', convertInchesToCentimeters);


function convertCentimetersToInches() {
  const centimetersValue = parseFloat(centimetersInput.value);
  if (!isNaN(centimetersValue)) {
    const inchesValue = centimetersValue / 2.54; 
    inchesInput.value = inchesValue.toFixed(2);
  } else {
    inchesInput.value = '';
  }
}


function convertInchesToCentimeters() {
  const inchesValue = parseFloat(inchesInput.value);
  if (!isNaN(inchesValue)) {
    const centimetersValue = inchesValue * 2.54; 
    centimetersInput.value = centimetersValue.toFixed(2);
  } else {
    centimetersInput.value = '';
  }
}



const poundsInput = document.getElementById('poundsInput');
const kilogramInput = document.getElementById('kilogramInput');


poundsInput.addEventListener('input', convertPoundsToKilograms);
kilogramInput.addEventListener('input', convertKilogramsToPounds);


function convertPoundsToKilograms() {
  const poundsValue = parseFloat(poundsInput.value);
  if (!isNaN(poundsValue)) {
    const kilogramsValue = poundsValue * 0.453592;
    kilogramInput.value = kilogramsValue.toFixed(2);
  } else {
    kilogramInput.value = '';
  }
}


function convertKilogramsToPounds() {
  const kilogramsValue = parseFloat(kilogramInput.value);
  if (!isNaN(kilogramsValue)) {
    const poundsValue = kilogramsValue / 0.453592; 
    poundsInput.value = poundsValue.toFixed(2);
  } else {
    poundsInput.value = '';
  }
}



const celciusInput = document.getElementById('CelciusInput');
const fahrenheitInput = document.getElementById('FarenheitInput');


celciusInput.addEventListener('input', convertCelciusToFahrenheit);
fahrenheitInput.addEventListener('input', convertFahrenheitToCelcius);


function convertCelciusToFahrenheit() {
  const celciusValue = parseFloat(celciusInput.value);
  if (!isNaN(celciusValue)) {
    const fahrenheitValue = (celciusValue * 9/5) + 32;
    fahrenheitInput.value = fahrenheitValue.toFixed(2);
  } else {
    fahrenheitInput.value = '';
  }
}

// to convert from Fahrenheit to Celsius
function convertFahrenheitToCelcius() {
  const fahrenheitValue = parseFloat(fahrenheitInput.value);
  if (!isNaN(fahrenheitValue)) {
    const celciusValue = (fahrenheitValue - 32) * 5/9; 
    celciusInput.value = celciusValue.toFixed(2);
  } else {
    celciusInput.value = '';
  }
}



const kilometerInput = document.getElementById('kilometerInput');
const mileInput = document.getElementById('mileInput');

// event listeners for the inputs
kilometerInput.addEventListener('input', convertKilometersToMiles);
mileInput.addEventListener('input', convertMilesToKilometers);

// Convert from kilometers to miles
function convertKilometersToMiles() {
  const kilometerValue = parseFloat(kilometerInput.value);
  if (!isNaN(kilometerValue)) {
    const mileValue = kilometerValue * 0.621371;
    mileInput.value = mileValue.toFixed(2);
  } else {
    mileInput.value = '';
  }
}

// to convert from miles to kilometers
function convertMilesToKilometers() {
  const mileValue = parseFloat(mileInput.value);
  if (!isNaN(mileValue)) {
    const kilometerValue = mileValue / 0.621371; 
    kilometerInput.value = kilometerValue.toFixed(2);
  } else {
    kilometerInput.value = '';
  }
}