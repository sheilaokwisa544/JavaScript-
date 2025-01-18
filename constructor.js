// methos  for defining properties and methods  of  objects

function Car (make,model,year,color){
    this.make=make,
    this.model  = model,
    this.year= year,
    this.drive = function(){console.log(`you drive the ${this.model}`)}
    this.color = color
}
const Car1 = new Car("Ford","Mustang","2024","Blue");
console.log(Car1.make);
console.log(Car1.model);
console.log(Car1.year);
console.log(Car1.color);

Car1.drive();