//keyword usedin classes  to call  the  constructor oraccess theproperties and methods  ofa paent(superclass)
//  this =  this object
//  super =the parent

class  animal{
        constructor(name,age){
            this.name = name;
            this.age = age;


        }
        move(){
            console.log(`The ${this.name} moves at   a speed of ${speed}`)
        }

}
class  rabbit extends animal{
    constructor(name,age,runspeed){
        super(name,age);
        this.runspeed =  runspeed
    }
    run(){
        console.log(`THis ${this.name} can run`);
        super.move(this.runspeed);
    }

}
class fish extends  animal{
    constructor(name,age , swimSpeed){
        super(name,age);
        this.runspeed =  swimSpeed;
        
    }
    swim(){
        console.log(`THis ${this.name} can swim`)
        super.move(this.swimSpeed)
    }

}

const rabbit = new rabbit("rabbit",2,23);
const fish =  new  fish("fish",3,56);
console.log(rabbit.name);
console.log(fish.age);
fish.swim();
