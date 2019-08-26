let fs = require("fs");


function ApiService(router) {
    // router.post("/files", async (ctx, next) => {
    //     ctx.status = 200;
    //     ctx.set("ETag", new Date().getTime());
    //     if (ctx.fresh) {
    //         ctx.status = 304;
    //         return;
    //     }
    //     ctx.body = "Hello World!";
    //     await next();
    // })

    // router.get("/helloworld", async (ctx, next) => {
    //     ctx.body = "Hello World!";
    //     await next();
    // })

    // router.post("/files", async (ctx, next) => {
    //     ctx.status = 200;
    //     console.log(ctx.request);
    //     await next();
    // })

    let buffs = [];
    let i = 0;
    router.post("/upload", async (ctx, next) => {
        console.log(++i);
        let chunk = ctx.request.files.file;
        let buff = fs.readFileSync(chunk.path);
        buffs.push(buff);
        let end = ctx.request.body.end;
        if (end) {
            let b = Buffer.concat(buffs);
            fs.writeFileSync(ctx.request.body.name, b);
        }
        ctx.body = {
            code: 0,
        }
        await next();
    })
}

module.exports = ApiService;