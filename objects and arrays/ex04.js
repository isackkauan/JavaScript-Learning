const prompt = require ('prompt-sync') ({sigint: true});

let senhas = [];
while (true){
    let senha = prompt("Digite uma senha: ")

    if (senha.length < 5){
        console.log("Essa senha tem menos de 5 caracteres, digite outra senha!")
    } else {
        senhas.push(senha)
        break;
    }
};

console.log(senhas);
