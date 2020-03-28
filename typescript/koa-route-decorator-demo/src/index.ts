import Koa, { Context } from "koa";
import Router from "koa-router";
import compose from "koa-compose";
import bodyParse from "koa-bodyparser";
import { controllerList, methodList, paramsList } from "./decorators";
import "./controllers/userController";
import "./controllers/orderController";

const routers: any[] = [];

controllerList.forEach(controllerData => {
    let { prefix, constructor } = controllerData;
    let route = new Router({
        prefix
    });
    methodList
        .filter(m => m.prototype === constructor.prototype)
        .forEach(methodData => {
            route[methodData.type](
                methodData.path,
                async (ctx: Context, next) => {
                    console.log(ctx.query);
                    let args = [];
                    paramsList
                        .filter(
                            pd =>
                                pd.prototype === constructor.prototype &&
                                pd.method === methodData.key
                        )
                        .forEach(pd => {
                            switch (pd.attachment) {
                                case "body":
                                    args[pd.index] = ctx.request.body[pd.param];
                                case "query":
                                    args[pd.index] = ctx.query[pd.param];
                            }
                        });
                    let result = methodData.handle(...args);
                    ctx.body = result;
                }
            );
        });
    routers.push(route.routes());
});

const app = new Koa();

app.use(bodyParse());
app.use(compose(routers));

app.listen(3000, () => console.log("server run as http://127.0.0.1:3000"));
