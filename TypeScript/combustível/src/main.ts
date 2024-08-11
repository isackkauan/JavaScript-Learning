import AlcoolFactory from "./AlcoolFactory";
import GasolinaFactory from "./GasolinaFactory";

document.getElementById('calcular')?.addEventListener('click',()=>{
    const tipo = (document.getElementById('fuelType') as HTMLSelectElement).value
    const preco = parseFloat((document.getElementById("preco") as HTMLSelectElement).value)
    const consumo = parseFloat((document.getElementById("consumo") as HTMLSelectElement).value)
    const distancia = parseFloat((document.getElementById("distancia") as HTMLSelectElement).value)
    const resposta = (document.getElementById("resposta") as HTMLSelectElement)
    let factory

    if(tipo == 'Alcool'){
        factory = new AlcoolFactory()
    }else{
        factory = new GasolinaFactory()
    }

    const combustivel = factory.criarCombustivel()
    const calculo = combustivel.calcular(distancia,consumo,preco)

    resposta.innerHTML = `o calculo foi: ${calculo}`
})