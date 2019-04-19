const Koa = require('koa');
const Router = require("koa-router");
const service = require("./api");

let app = new Koa();
let router = new Router();

service(router);

app.use(async (ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD, OPTIONS");
    await next();
    console.log(`${ctx.method} ${ctx.path} ${ctx.status} `);
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(4001,"127.0.0.1");
console.log("listening port 4001...");
