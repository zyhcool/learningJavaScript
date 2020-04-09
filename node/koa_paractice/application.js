const EventEmitter = require("events").EventEmitter;
const http = require("http");
let request = require("./request");
let response = require("./response");
let context = require("./context");

module.exports = class Application extends EventEmitter {
    constructor() {
        super();
        this.middleWares = [];
        this.request = Object.create(request);
        this.response = Object.create(response);
        this.context = Object.create(context);
    }

    listen(...args) {
        const server = http.createServer(this.callback());
        server.listen(...args);
    }

    use(fn) {
        this.middleWares.push(fn);
        return this;
    }

    callback() {
        let fn = compose(this.middleWares);
        console.log("ahha");
        return (req, res) => {
            let ctx = this.createContext(req, res);
            return fn(ctx)
                .then(() => this.handResponse(ctx))
                .catch((err) => console.log(err));
        };
    }

    handResponse(ctx) {
        console.log("res");
        ctx.res.end("helloe");
    }

    createContext(req, res) {
        const context = Object.create(this.context);
        const request = (context.request = Object.create(this.request));
        const response = (context.response = Object.create(this.response));
        context.app = request.app = response.app = this;
        context.req = request.req = response.req = req;
        context.res = request.res = response.res = res;
        request.ctx = response.ctx = context;
        request.response = response;
        response.request = request;
        context.originalUrl = request.originalUrl = req.url;
        context.state = {};
        return context;
    }
};

function compose(middleWares) {
    return (ctx) => {
        function dipatch(index) {
            if (index === middleWares.length) {
                return;
            }
            const middleWare = middleWares[index];
            return Promise.resolve(middleWare(ctx, () => dipatch(index + 1)));
        }
        return dipatch(0);
    };
}
