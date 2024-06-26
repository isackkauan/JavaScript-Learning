function experiencia(anos){
    if (anos >= 0 && anos <= 1){
        let experiencia = "Iniciante";
        return experiencia;
    } else if (anos > 1 && anos <= 3){
        let experiencia = "Intermediário";
        return experiencia
    } else if (anos > 3 && anos <= 6){
        let experiencia = "Avançado";
        return experiencia
    } else if (anos > 7){
        let experiencia = "Jedi master";
        return experiencia;
    }
}

console.log(experiencia(10))