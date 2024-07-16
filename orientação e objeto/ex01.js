class triangulo{ 
    constructor(lado){
        this.lado = lado;
    }

    area(){
        let area = ((this.lado ** 2) * Math.sqrt(3)) / 4;
        return area;
    }

    perimetro(){
        let perimetro = this.lado * 3
        return perimetro;
    }
}

const lados = new triangulo(5);
console.log(lados.perimetro())
console.log(lados.area())