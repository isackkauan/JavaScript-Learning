let num1, num2, escolha;
num1 = Math.ceil(Math.random() * 100);
num2 = Math.ceil(Math.random() * 100);
escolha = Math.ceil(Math.random() * 4);

console.log("num1 =", num1, "num2 =", num2, "escolha =", escolha)

if (escolha == 1){
    let media = (num1 + num2) / 2
    console.log(media)
}
else if (escolha == 2){
    let diferença = num1 - num2
    console.log(diferença)
}
else if (escolha == 3){
    let produto = num1 * num2
    console.log(produto)
}
else if (escolha == 4){
    let divisao = num1 / num2
    console.log(divisao)
}
