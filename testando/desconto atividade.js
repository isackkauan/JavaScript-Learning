const preço_produto = prompt("Digite o preço do produto: ")
const pagamento = prompt("Formas de pagamento\nÀ vista[1]\nParcelado[2]")
if (pagamento == 1){
    const desconto = (preço_produto * 90) / 100
    console.log("O seu pagamento vai ser de R$", desconto)
}else{
    console.log("O seu pagamento vai ser de 3 parcela de R$", preço_produto / 3)
}