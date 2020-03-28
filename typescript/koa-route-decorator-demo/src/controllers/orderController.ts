import { Controller, Get, Query } from "../decorators";

@Controller("/orders")
export default class OrderController {
    name: string = "ppd";
    @Get("/")
    index(@Query("id") id: number) {
        console.log("inside orders/index" + this.name);
        return {
            code: 200,
            id,
            type: typeof id
        };
    }

    @Get("/about")
    about(@Query("id") id: string) {
        return {
            code: 200,
            id,
            type: typeof id
        };
    }
}
