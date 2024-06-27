let ListaTarefas = ["Nadar", "Jogar", "Comer", "Estudar"];

//adicionar uma nova tarefa no final da lista
function adicionarTarefa(tarefa, lista){
    lista.push(tarefa)
};

//remove a ultima tarefa de uma lista
function removerUltimaTarefa(lista){
    lista.pop()
};

//remove a primeira tarefa de uma lista
function removerPrimeiraTarefa(listsa){
    lista.shift()
};

//imprime todas as tarefas da lista
function imprimeTarefas(lista){
    for (let tarefa of ListaTarefas){
        console.log(tarefa)
    };
};
