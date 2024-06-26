function verificarParidade(num){
    if (num % 2 == 0 ){
        let paridade = "Esse número é par!";
        return paridade;
    }else{
        let paridade = "Esse número é impar";
        return paridade;
    }
}
console.log(verificarParidade(parseInt(Math.random() * 100)))
