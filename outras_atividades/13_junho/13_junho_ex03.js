let sexo = parseInt(Math.random() * (2 - 1 + 1) + 1);
let altura = ((Math.random() * (2 - 1.5) + 1.5)).toFixed(2);

if (sexo == 1){
    console.log("Você é do sexo feminino e seu peso ideal é",((62.1 * altura) - 44.7).toFixed(2));
} else if (sexo == 2){
    console.log("Você é do sexo masculino e seu peso ideal é", ((72.7 * altura) - 58).toFixed(2));
}


