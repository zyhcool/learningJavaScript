let http = require("http");
let crypto = require("crypto");

let server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("hello");
});

server.listen(3000, "127.0.0.1");

/// 自定义对 upgrade 事件的处理逻辑，实现建立 WebSocket 连接
server.on("upgrade", (req, socket, upgradeHead) => {
    console.log(upgradeHead.length);
    const head = Buffer.alloc(upgradeHead.length);

    upgradeHead.copy(head);
    let key = req.headers["sec-websocket-key"];
    const GUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"; //协议中规定的校验用GUID,这是算法中要用到的固定字符串
    key = crypto
        .createHash("sha1")
        .update(`${key}${GUID}`)
        .digest("base64");

    let headers = [
        "HTTP/1.1 101 Switching Protocols",
        "Upgrade: websocket",
        "Connection: keep-alive,Upgrade",
        "Sec-Websocket-Accept: " + key
    ];
    socket.setNoDelay(true);
    socket.write(headers.concat("", "").join("\r\n"));

    socket.on("data", e => {
        //接收数据
        console.log("接收数据", e.data);
        // socket.write(headers.concat("", "").join("\r\n"));
        socket.end();
    });
});

console.log("listening at 127.0.0.1:3000");
