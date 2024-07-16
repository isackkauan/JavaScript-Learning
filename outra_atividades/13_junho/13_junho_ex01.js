let num1, num2;
num1 = parseInt(Math.random() * 100);
num2 = parseInt(Math.random() * 100);

if (num1 > num2){
    console.log("O número", num1, "é maior que o número", num2);
} else if (num2 > num1){
    console.log("O número", num2, "é maior que o número", num1);
} else {
    console.log("Os números são iguais e eles são", num1);
}