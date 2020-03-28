let http = require("http");
let crypto = require("crypto");
const str = "sneju3987fns-8397hjsnf7y4h-sdjfn4w98vhhsjy";

class WebSocket {
    constructor(url) {
        this.port = 3000;
        this.host = "127.0.0.1";
        this.connect();
    }

    connect() {
        let randomKey = Buffer.alloc(100, Date.now().toString()).toString(
            "base64"
        );
        // let shaKey = crypto
        //     .createHash("sha1")
        //     .update(randomKey + str)
        //     .digest("base64");
        let options = {
            port: this.port,
            host: this.host,
            headers: {
                Connection: "Upgrade",
                Upgrade: "websocket",
                "Sec-WebSocket-Version": 13,
                "Sec-WebSocket-Key": randomKey
            }
        };
        let req = http.request(options);
        req.on("upgrade", (res, socket, upgradeHead) => {
            console.log(res);
            this.setSocket(socket);
            this.onopen();
        });
    }

    setSocket(socket) {
        this.socket = socket;
    }

    onopen() {}
}

let ws = new WebSocket("");
