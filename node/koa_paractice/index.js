const Koa = require("./application");

let app = new Koa();

app.use(async (ctx, next) => {
    console.log(1);
    await next();
    console.log(2);
});

app.use(async (ctx, next) => {
    console.log(3);
    await next();
    console.log(4);
});

app.listen(3000, () => {
    console.log("3000 ....");
});
