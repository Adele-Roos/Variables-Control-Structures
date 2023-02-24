// This program allows the user to convert any temperature from either C - Celsius, F - Fahrenheit or K - Kelvin to C, F or K
// It first prompts user for the metric they converting from
let choosemetric = prompt(`In which metric is the temperature you are converting? Type C or F or K:
C - (Celsius)
F - (Fahrenheit)
K - (Kelvin)`);

// This converts the string value entered to an uppercase letter
let metric_uppercase = choosemetric.toUpperCase();

// User then inputs the temperature they want to convert
let temperature = prompt("Enter the temperature that you want to convert: ");

// This converts the string value into an integer
let num_temperature = Number(temperature);

// Next it prompts user for the metric they converting to
let next_metric = prompt(`To which metric would you like to convert the temperature to?"
C - (Celsius)
F - (Fahrenheit)
K - (Kelvin)`);

// This converts the string value entered to an uppercase letter
let convert_to = next_metric.toLocaleUpperCase();

switch (metric_uppercase) {
    case "C":
        switch (convert_to) {
            case "F":
                // Input temperature is converted from Celsius to Fahrenheit
                let fahrenheit = (num_temperature * 9 / 5 + 32);
                let fahrenheit_decimal = fahrenheit.toFixed(2);
                console.log((num_temperature + "°C") + " is " + (fahrenheit_decimal + "°F"));
                break;

            case "K":
                // Input temperature is converted from Celsius to Kelvin
                let kelvin = ((num_temperature) + 273.15);
                let kelvin_decimal = kelvin.toFixed(2);
                console.log((num_temperature + "°C") + " is " + (kelvin_decimal + "K"));
                break;
                console.log("Invalid metic to convert to");
            }
            break;

    case "F":
        switch (convert_to) {
            case "C":
                // Input temperature is converted from Fahrenheit to Celsius
                let celsius = ((num_temperature - 32) * 5 / 9);
                let celsius_decimal = celsius.toFixed(2);
                console.log((num_temperature + "°F") + " is " + (celsius_decimal + "°C"));
                break;
            case "K":
                // Input temperature is converted from Fahrenheit to Kelvin
                let kelvin = ((num_temperature + 459.67) * 5 / 9);
                let kelvin_decimal = kelvin.toFixed(2);
                console.log((num_temperature + "°F") + " is " + (kelvin_decimal + "K"));
                break;
            default:
                console.log("Invalid metic to convert to");
        }
        break;

    case "K":
        switch (convert_to) {
            case "C":
                // Input temperature is converted from Kelvin to Celsius
                let celsius = ((num_temperature) - 273.15);
                let celsius_decimal = celsius.toFixed(2);
                console.log((num_temperature + "K") + " is " + (celsius_decimal + "°C"));
                break;
            case "F":
                // Input temperature is converted from Kelvin to Fahrenheit
                let fahrenheit = ((num_temperature) * 9 / 5 - 459.67);
                let fahrenheit_decimal = fahrenheit.toFixed(2);
                console.log((num_temperature + "K") + " is " + (fahrenheit_decimal + "°F"));
                break;
            default:
                console.log("Invalid metic to convert to");
        }
        break;
            console.log("Invalid metic to convert to");
    }
