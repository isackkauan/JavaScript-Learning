let ferramentas = [];

let contador = 0;
while (contador != 5){
    let ferramenta = prompt("Digite uma ferramenta: ")
    ferramentas.push(ferramenta)
    contador = contador + 1
};

if (ferramentas.includes("martelo")){
    console.log(true)
} else {
    console.log(false)
};