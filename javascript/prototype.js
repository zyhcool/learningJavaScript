let Person = function(){
    // return Person.prototype.init();
}

Person.prototype = {
    init: function(name){
        this.name = name ? name : this.name;
        return this;
    },
    name: "asa",
}

let person = new Person().init("hh");
// person.init();
console.log(person);
console.log(person.name);