let pessoa = {
    nome: "João",
    idade: 30
};
  
function atualizarIdade(pessoa, novaIdade) {
    pessoa.idade = novaIdade;
}
  
console.log("Idade antes da atualização:", pessoa.idade);
atualizarIdade(pessoa, 35);j
console.log("Idade após a atualização:", pessoa.idade);
  