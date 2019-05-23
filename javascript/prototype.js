let Person = function(){
    // return Person.prototype.init();
}

Person.init = function(name){
    let instance = new Person();
    instance.name = name;
    return instance;
}

Person.prototype = {
    name: "asa",
}

let person = Person.init("hahahehe");
// person.init();
console.log(person);
console.log(person instanceof Person); // true
