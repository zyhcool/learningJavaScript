import { Controller, Get, Query } from "./../decorators";

@Controller("/users")
export default class UserController {
    @Get("/")
    list() {
        console.log("inside list");
        return "";
    }

    @Get("/getUser")
    getUser(@Query("id") id: string) {
        console.log("inside getUser");
        return {
            status: 200
        };
    }
}
