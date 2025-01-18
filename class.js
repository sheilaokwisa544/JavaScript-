// struv=ctured way to work  with objects

class products{
    constructor(name,price){
        this.name=name,
        this.price=price
    }

    displayProduct(){
        console.log(`product: ${this.name}`);
        console.log(`product: ${this.price}`);
    }
}
const product1 = new products("shirt","200");
product1.displayProduct();
