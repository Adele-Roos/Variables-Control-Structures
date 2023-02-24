// This program allows the user to convert any temperature from either C - Celsius, F - Fahrenheit or K - Kelvin to C, F or K
// It first prompts user for the metric they converting from
let choosemetric = prompt(`In which metric is the temperature you are converting? Type C or F or K:
C - (Celsius)
F - (Fahrenheit)
K - (Kelvin)`);

// This converts the string value entered to an uppercase letter
let metricUppercase = choosemetric.toUpperCase();

// User then inputs the temperature they want to convert
let temperature = prompt("Enter the temperature that you want to convert: ");

// This converts the string value into an integer
let numTemperature = Number(temperature);

// Next it prompts user for the metric they converting to
let nextMetric = prompt(`To which metric would you like to convert the temperature to?"
C - (Celsius)
F - (Fahrenheit)
K - (Kelvin)`);

// This converts the string value entered to an uppercase letter
let convertTo = nextMetric.toLocaleUpperCase();

switch (metricUppercase) {
    case "C":
        switch (convertTo) {
            case "F":
                // Input temperature is converted from Celsius to Fahrenheit
                let fahrenheit = (numTemperature * 9 / 5 + 32);
                let fahrenheitDecimal = fahrenheit.toFixed(2);
                console.log((numTemperature + "°C") + " is " + (fahrenheitDecimal + "°F"));
                break;

            case "K":
                // Input temperature is converted from Celsius to Kelvin
                let kelvin = ((numTemperature) + 273.15);
                let kelvinDecimal = kelvin.toFixed(2);
                console.log((numTemperature + "°C") + " is " + (kelvinDecimal + "K"));
                break;
                console.log("Invalid metic to convert to");
            }
            break;

    case "F":
        switch (convertTo) {
            case "C":
                // Input temperature is converted from Fahrenheit to Celsius
                let celsius = ((numTemperature - 32) * 5 / 9);
                let celsiusDecimal = celsius.toFixed(2);
                console.log((numTemperature + "°F") + " is " + (celsiusDecimal + "°C"));
                break;
            case "K":
                // Input temperature is converted from Fahrenheit to Kelvin
                let kelvin = ((numTemperature + 459.67) * 5 / 9);
                let kelvinDecimal = kelvin.toFixed(2);
                console.log((numTemperature + "°F") + " is " + (kelvinDecimal + "K"));
                break;
            default:
                console.log("Invalid metic to convert to");
        }
        break;

    case "K":
        switch (convertTo) {
            case "C":
                // Input temperature is converted from Kelvin to Celsius
                let celsius = ((numTemperature) - 273.15);
                let celsiusDecimal = celsius.toFixed(2);
                console.log((numTemperature + "K") + " is " + (celsiusDecimal + "°C"));
                break;
            case "F":
                // Input temperature is converted from Kelvin to Fahrenheit
                let fahrenheit = ((numTemperature) * 9 / 5 - 459.67);
                let fahrenheitDecimal = fahrenheit.toFixed(2);
                console.log((numTemperature + "K") + " is " + (fahrenheitDecimal + "°F"));
                break;
            default:
                console.log("Invalid metic to convert to");
        }
        break;
            console.log("Invalid metic to convert to");
    }
