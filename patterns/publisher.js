class Shop {
    constructor() {
        this.guests = [];
    }
    listen(fn) {
        this.guests.push(fn);
    }
    publish() {
        for (let i = 0; i < this.guests.length; i++) {
            this.guests[i].apply(this, arguments);
        }
    }
}

let shoeshop = new Shop();

shoeshop.listen((color, size) => {
    console.log("color: ", color);
    console.log("size: ", size);
})

shoeshop.publish("red", 23);