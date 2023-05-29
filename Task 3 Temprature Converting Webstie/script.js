// Get DOM elements
var inputField = document.getElementById('temp-input');
var celsiusRadio = document.getElementById('celsius');
var fahrenheitRadio = document.getElementById('fahrenheit');
var convertButton = document.getElementById('temp-btn');
var resultText = document.getElementById('temp-result-text');

// Add event listener to the convert button
convertButton.addEventListener('click', function () {
    var temperature = parseFloat(inputField.value);

    if (isNaN(temperature)) {
        resultText.textContent = 'Please enter a valid temperature.';
        return;
    }

    if (celsiusRadio.checked) {
        var fahrenheit = (temperature * 9) / 5 + 32;
        resultText.textContent =
            temperature + '°C = ' + fahrenheit.toFixed(2) + '°F';
    } else if (fahrenheitRadio.checked) {
        var celsius = ((temperature - 32) * 5) / 9;
        resultText.textContent =
            temperature + '°F = ' + celsius.toFixed(2) + '°C';
    }
});
