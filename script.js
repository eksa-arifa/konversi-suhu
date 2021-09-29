const celcius = document.getElementById('celcius');
const kelvin = document.getElementById('kelvin');
const fahrenheit = document.getElementById('fahrenheit');
const reamur = document.getElementById('reamur');

celcius.onkeyup = ()=>{
  kelvin.value = celcius.value * 1 + 273.15;
  fahrenheit.value = celcius.value * 1.8 + 32;
  reamur.value = celcius.value * 0.8;
  
  if (celcius.value == "") {
    kelvin.value = "";
    fahrenheit.value = "";
    reamur.value = "";
  }
}

kelvin.onkeyup = ()=>{
  celcius.value = kelvin.value - 273.15;
  fahrenheit.value = kelvin.value * 1.8 - 459.67;
  reamur.value = (kelvin.value - 273.15) * 0.8;
  
  if (kelvin.value == "") {
    celcius.value = "";
    fahrenheit.value = "";
    reamur.value = ""
  }
}

fahrenheit.onkeyup = ()=>{
  celcius.value = (fahrenheit.value - 32) / 1.8;
  kelvin.value = (fahrenheit.value * 1 + 459.67) / 1.8;
  reamur.value = (fahrenheit.value - 32) / 2.25;
  
  if (fahrenheit.value == "") {
    celcius.value = "";
    kelvin.value = "";
    reamur.value = "";
  }
}

reamur.onkeyup = ()=>{
  celcius.value = reamur.value / 0.8;
  kelvin.value = reamur.value / 0.8 + 273.15;
  fahrenheit.value = reamur.value * 2.25 + 32;
  
  if (reamur.value == "") {
    celcius.value = "";
    kelvin.value = ""
    fahrenheit.value = "";
  }
}