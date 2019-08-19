// class Shop {
//     constructor() {
//         this.guests = [];
//     }
//     listen(fn) {
//         this.guests.push(fn);
//     }
//     publish() {
//         for (let i = 0; i < this.guests.length; i++) {
//             this.guests[i].apply(this, arguments);
//         }
//     }
// }

// let shoeshop = new Shop();

// shoeshop.listen((color, size) => {
//     console.log("color: ", color);
//     console.log("size: ", size);
// })

// shoeshop.publish("red", 23);





class Publisher {
    constructor() {
        this.topics = {};
    }

    subscrib(topic, fnc) {
        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }
        const key = Math.random();
        this.topics[topic].push({
            key,
            fnc,
        })
        return key;
    }

    unSubscrib(topic, key) {
        if (!this.topics[topic]) {
            return;
        }
        this.topics[topic].forEach((v, i) => {
            if (v.key === key) {
                this.topics[topic].splice(i, 1);
            }
        })
    }

    publish(topic) {
        if (!this.topics[topic] || this.topics[topic].length === 0) {
            return;
        }
        this.topics[topic].forEach(item => item.fnc())
    }
}

let publisher = new Publisher();

let xh = publisher.subscrib("success", () => {
    console.log("success");
})

let xm = publisher.subscrib("error", () => {
    console.log("error");
})


publisher.unSubscrib("success",xm)

publisher.publish("success")
publisher.publish("error")