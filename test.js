let EventEmitter = require("events").EventEmitter;

class ha extends EventEmitter {
    constructor() {
        super();
    }
    onerror(err) {
        console.log("haha", err);
    }
}

let h = new ha();
h.emit("error", new Error("en"), this);
