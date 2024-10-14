function Person(name,age){
    this.name = name;
    this.age = age;
};

Person.prototype.talk = function(){
    console.log("Hello, my name is " + this.name + " and age is " + this.age);
}


let person1=new Person("Anu",21);
let person2=new Person("Deepu",22);