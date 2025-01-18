//getter makes a property readable

//setter makes a property unreadable
//they validateand modify a value when  readding/writing a property

class rectangle{
    constructor(width,height){
        this.width =  width;
        this.height= height;

    }

    set width(newWidth){
        if(newWidth >0){
            this.width = newWidth;
        }
        else{
            console.error("width must be  a positive number");
        }

    }

    get width(){
        return  this.width.toFixed(1);

    }

    set height(newHeight){
        if(newHeight >0){
            this.height = newHeight;
        }
        else{
            console.error("Height must be  a positive number");
        }

    }

    get height(){
        return this.height.toFixed(1);
    }
    get area(){
        return this.width*this.height;
    }
}
const rectangle = new rectangle(5,4

);
console.log(rectangle.area);
console.log (rectangle.height);
