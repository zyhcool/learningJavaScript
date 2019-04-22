
function ApiService(router) {
    router.post("/helloworld", async (ctx, next) => {
        ctx.status = 200;
        ctx.set("ETag", new Date().getTime());
        if (ctx.fresh) {
            ctx.status = 304;
            return;
        }
        ctx.body = "Hello World!";
        await next();
    })

    router.get("/helloworld", async (ctx, next) => {
        ctx.body = "Hello World!";
        await next();
    })
}

module.exports = ApiService;