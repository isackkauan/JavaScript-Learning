interface Car {
    drive(): string;
}
  
interface Moto {
    ride(): string;
}
  

class LuxuryCar implements Car {
    drive(): string {
        return "Driving a luxury car";
    }
}

class LuxuryMoto implements Moto {
    ride(): string {
        return "Riding a luxury moto";
    }
}
  
class EconomyCar implements Car {
    drive(): string {
        return "Driving an economy car";
    }
}
  
class EconomyMoto implements Moto {
    ride(): string {
        return "Riding an economy moto";
    }
}
  
interface VehicleFactory {
    createCar(): Car;
    createMoto(): Moto;
}
  
class LuxuryVehicleFactory implements VehicleFactory {
    createCar(): Car {
        return new LuxuryCar();
    }
    
    createMoto(): Moto {
        return new LuxuryMoto();
    }
}
  
class EconomyVehicleFactory implements VehicleFactory {
    createCar(): Car {
        return new EconomyCar();
    }

    createMoto(): Moto {
        return new EconomyMoto();
    }
}
  
function clientCode(factory: VehicleFactory): void {
    const car = factory.createCar();
    const moto = factory.createMoto();

    console.log(car.drive());
    console.log(moto.ride());
}

console.log("Luxury vehicles:");
clientCode(new LuxuryVehicleFactory());

console.log("\nEconomy vehicles:");
clientCode(new EconomyVehicleFactory());
  