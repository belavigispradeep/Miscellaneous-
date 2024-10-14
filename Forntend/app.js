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