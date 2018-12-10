let Person = function(){
    return Person.prototype.init();
}

Person.prototype = {
    init: function(){
        return this;
    },
    name: "asa",
}

let person = new Person();
console.log(person.name);