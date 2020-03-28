export let controllerList = [];
export let methodList = [];
export let paramsList = [];

export function Controller(prefix: string) {
    return function(constructor) {
        controllerList.push({
            constructor,
            instance: new constructor(),
            prefix
        });
    };
}

declare type httpType = "post" | "get";
export function Method(type: httpType = "get") {
    return (path: string = "/") =>
        function(prototype, key, desc) {
            methodList.push({
                prototype,
                key,
                type,
                path,
                handle: desc.value
            });
        };
}

export function Param(attachment: string) {
    return (param: string) =>
        function(prototype, method, index) {
            paramsList.push({
                prototype,
                method,
                attachment,
                param,
                index
            });
        };
}

export let Get = Method("get");
export let Post = Method("post");

export let Query = Param("query");
export let Body = Param("body");
