// defines properties or  methods that belong to  a   class   itself rather than  the objects created from that class


class MathUtil{
    
    static PI = 3.14159;


static getDiameter(radius){
    return radius *2;
}

static getArea(radius){
    return this.PI *radius*radius
    
}

}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getArea(10));



class user{
    static userCount =0;

    constructor(username){
        this.username=username;
        user.userCount++;
        


    }
}
const user1 = new user("Mica");
console.log(user1.username);