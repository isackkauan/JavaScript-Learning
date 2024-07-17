let codigo, quantidade, preço_total;
quantidade = Math.ceil(Math.random() * 10);
quantidade_inicial = quantidade
preço_total = 0

while (quantidade != 0){

    codigo = Math.floor(Math.random() * 6) + 100;

    if (codigo == 100){
        preço_total = preço_total + 1.70
    }
    else if (codigo == 101){
        preço_total = preço_total + 2.30
    }
    else if (codigo == 102){
        preço_total = preço_total + 2.60
    }
    else if (codigo == 103){
        preço_total = preço_total + 2.40
    }
    else if (codigo == 104){
        preço_total = preço_total + 2.50
    }
    else if (codigo == 105){
        preço_total = preço_total + 1.00
    }

    quantidade = quantidade - 1;
}


console.log("Você comprou", quantidade_inicial, "lanches e o valor total é de R$", preço_total.toFixed(2));