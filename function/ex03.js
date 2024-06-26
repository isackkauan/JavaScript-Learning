function converteCelsiusParaFahrenheit(celsius){
    let fahrenheit = (celsius * (9/5)) + 32;
    return fahrenheit;
}
const prompt = require("prompt-sync") ({sigint:true});
let user_celsius = prompt("Digite um temperatura em graus celsius: ")
console.log(converteCelsiusParaFahrenheit(user_celsius))