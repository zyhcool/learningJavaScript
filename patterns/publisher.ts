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



interface ITopic {
    [topic: string]: Array<{ key: number, fnc: (...args) => any }>
}

class Publisher {
    constructor() {
        this.topics = {};
    }
    private topics: ITopic;
    private static instance: Publisher = new Publisher();

    subscrib(topic: string, fnc: any) {
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

    unSubscrib(topic: string, key: number) {
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

    static load(obj) {
        for (let en in this.instance) {
            obj[en] = this.instance[en]
        }
    }
}

// let publisher = new Publisher();

// let xh = publisher.subscrib("success", () => {
//     console.log("success");
// })
// let xm = publisher.subscrib("error", () => {
//     console.log("error");
// })
// publisher.unSubscrib("success",xm)
// publisher.publish("success")
// publisher.publish("error")

// 为其他对象添加 发布-订阅 功能
let obj:any = {}
Publisher.load(obj);

let xh = obj.subscrib("success", () => {
    console.log("success");
})
let xm = obj.subscrib("error", () => {
    console.log("error");
})
obj.unSubscrib("success",xm)
obj.publish("success")
obj.publish("error")