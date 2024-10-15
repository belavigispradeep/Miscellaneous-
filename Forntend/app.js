function Person(name,age){
    this.name = name;
    this.age = age;
};

Person.prototype.talk = function(){
    console.log("Hello, my name is " + this.name + " and age is " + this.age);
}


let person1=new Person("Anu",21);
let person2=new Person("Deepu",22);

class mens{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name} and my age is ${this.age}`);
    }
}

let man1=new mens("Ananya",21);
let man2=new mens("Sakshi",22); 

class Animals{
    constructor(name,type){
        this.name=name;
        this.type=type;
    }
    attack(){
        console.log(`${this.name} is Danger Animal`);
    }
}

class Lion extends Animals{
    constructor(name,type,food){
        super(name,type);
        this.food=food;
        }
}

class Parrot extends Animals{
    constructor(name,type,food){
        super(name,type);
        this.food=food;
        }
}