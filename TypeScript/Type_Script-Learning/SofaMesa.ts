interface Sofa {
sit(): string;
}

interface Table {
use(): string;
}

class ModernSofa implements sofa{
    sit(): string {
        return "Sitting on a modern sofa";
    }
}

class ModernTable implements Table {
use(): string {
    return "Using a modern table";
}
}

class ClassicSofa implements Sofa {
sit(): string {
    return "Sitting on a classic sofa";
}
}

class ClassicTable implements Table {
use(): string {
    return "Using a classic table";
}
}

interface FurnitureFactory {
createSofa(): Sofa;
createTable(): Table;
}

class ModernFurnitureFactory implements FurnitureFactory {
createSofa(): Sofa {
    return new ModernSofa();
}

createTable(): Table {
    return new ModernTable();
}
}

class ClassicFurnitureFactory implements FurnitureFactory {
createSofa(): Sofa {
    return new ClassicSofa();
}

createTable(): Table {
    return new ClassicTable();
}
}

function clientCode(factory: FurnitureFactory): void {
    const sofa = factory.createSofa();
    const table = factory.createTable();

    console.log(sofa.sit());
    console.log(table.use());
}

console.log("Modern furniture:");
clientCode(new ModernFurnitureFactory());

console.log("\nClassic furniture:");
clientCode(new ClassicFurnitureFactory());
