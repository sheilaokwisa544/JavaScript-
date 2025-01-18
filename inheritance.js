//  allows a new class  to  inherit properties from an existing class

class animal{
    alive=  true;

    eat(){
        console.log(`this  ${this.name}is eating`);

    }
    sleep(){
        console.log(`This ${this.name} is  sleeping`)
    }
}
class rabbit extends animal{
    name = "rabbit"
    run(){
        console.log(`this ${this.name} is running`)
    }
}
class fish extends animal{
    name ="fish"
}
const rabbit = new rabbit();
const fish = new  fish();

console.log(rabbit.alive);
fish.eat();
rabbit.run();
