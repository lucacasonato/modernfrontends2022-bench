enum Color {
  Red,
  Green,
  Blue,
}

interface Vehicle {
  color: Color;

  start(): void;
  stop(): void;
}

export class Car implements Vehicle {
  color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  start(): void {
    console.log("Car started");
  }

  stop(): void {
    console.log("Car stopped");
  }
}

export class Truck implements Vehicle {
  color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  start(): void {
    console.log("Truck started");
  }

  stop(): void {
    console.log("Truck stopped");
  }
}

const car = new Car(Color.Red);
const truck = new Truck(Color.Blue);

car.start();
truck.start();
truck.stop();
truck.stop();