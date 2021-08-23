class Convert {
  
  fromCelcius(to, inputTemperature) {
    if (to == "cel") {
      return num1;
    }
    if (to == "rea") {
      return (4 / 5) * inputTemperature;
    }
    if (to == "fah") {
      return (9 / 5) * inputTemperature + 32;
    }
  }
  fromReamur(to, inputTemperature) {
    if (to == "rea") {
      return inputTemperature;
    }
    if (to == "cel") {
      return (5 / 4) * inputTemperature;
    }
    if (to == "fah") {
      return (9 / 4) * inputTemperature + 32;
    }
  }
  fromFarenheit(to, inputTemperature) {
    if (to == "fah") {
      return inputTemperature;
    }
    if (to == "cel") {
      return (5 / 9) * (inputTemperature - 32);
    }
    if (to == "rea") {
      return (4 / 9) * (inputTemperature - 32);
    }
  }
}

module.exports = Convert;
