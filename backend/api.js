
function ApiService(router) {
    router.post("/helloworld", async (ctx, next) => {
        ctx.body = "Hello World!";
        await next();
    })
    
    router.get("/helloworld", async (ctx, next) => {
        ctx.body = "Hello World!";
        await next();
    })
}

module.exports = ApiService;