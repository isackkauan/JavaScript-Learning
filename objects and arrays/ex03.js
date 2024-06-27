const prompt = require ('prompt-sync') ({sigint: true});
const banco_nomes = [];
let nome = prompt('Digite seu nome: ');
banco_nomes.push(nome);
console.log(banco_nomes);