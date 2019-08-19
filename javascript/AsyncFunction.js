
/*
* ========================================================
*   异步编程 -- 回调函数   
* ========================================================*/

let f1 = function () {
    for (let i = 0; i < 2 * (10 ** 9); i++) { }
    console.log("f1");
}
let f2 = function () {
    console.log("f2");
}
// f1();
// f2();

let f1_async = function () {
    setTimeout(() => {
        for (let i = 0; i < 2 * (10 ** 9); i++) { }
        console.log("f1");
    }, 0);
}
let f2_async = function () {
    console.log("f2");
}
// f1_async();
// f2_async();

/*
* ========================================================
*   回调函数 -- Promise   
* ========================================================*/

let fp1 = function () {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < 2 * (10 ** 9); i++) { }
        resolve("fp1");
    })
}
let fp2 = function () {
    console.log("fp2");
}
// fp1();
// fp2();
// expect output： "fp2"
// "fp2" 在延迟几秒后输出，可见 fp1 和 fp2 是同步代码；fp1 返回的 Promise 对象经过几秒的延迟变为
// fulfilled 状态，

// fp1().then((value) => {
//     console.log(value);
// })
// fp2();
// expect output："fp2" "fp1"
// 延迟几秒后同时输出 "fp2" 和 "fp1"，fp1 执行需要几秒，阻塞 fp2 的执行，所以 "fp2" 在几秒后才输出；
// 而 fp1().then() 是异步代码，所以会在 fp2 (同步代码)执行后才执行，所以 "fp1" 最后输出

let fp1_async = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < 2 * (10 ** 9); i++) { }
            resolve("fp1_async");
        }, 0);
    })
}

// fp1_async().then((value) => {
//     console.log(value);
// })
// fp2();
// expect output: "fp2" "fp1_async"
// "fp2" 先输出，几秒延迟后 "fp1_async" 输出，此时 fp1_async 是异步函数，返回的 Promise 对象会在
// 同步代码执行后才开始状态改变的代码


let fp1_async2 = function () {
    setTimeout(() => {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < 2 * (10 ** 9); i++) { }
            resolve("fp1_async2");
        })
    }, 0);
}
// fp1_async2().then((value) => {
//     console.log(value);
// })
// fp2();
// expect output: Uncaught TypeError: Cannot read property 'then' of undefined


/*
* ========================================================
*   XMLHttpRequest   
* ========================================================*/
let s = (data) => {
    console.log("success: \n", data);
}
function request_callback(onSuccess) {
    console.log("enter request_callback");
    let formData = new FormData();
    formData.append("name", "cool");

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:4001/helloworld");
    xhr.send(formData);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            onSuccess(xhr.response);
        }
    }
}

let otherFunc = () => {
    console.log("otherFunc");
}

// 后端 api 代码：
// router.post("/helloworld", async (ctx, next) => {
//     for (let i = 0; i < 2 * (10 ** 9); i++) { }
//     let data = `helloworld, ${ctx.request.body.fields.name}`;
//     ctx.body = { message: "创建成功", data };
//     await next();
// });

// request_callback(s);
// otherFunc();
// expect output: "enter request_callback"，"otherFunc", {"message":"创建成功","data":"helloworld, zyh","code":0}
// s 函数作为回调函数，在请求成功后调用；"enter request_callback" 和 "otherFunc" 同时输出，
// 可见request_callback 和 otherFunc 是同步的

function request_promise() {
    return new Promise((resolve, reject) => {
        let formData = new FormData();
        formData.append("name", "zyh");

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1:4001/helloworld");
        xhr.send(formData);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.response);
            }
        }
    })
}

// request_promise().then((value) => {
//     console.log(value);
// })
// otherFunc();
// expect output: "otherFunc", {"message":"创建成功","data":"helloworld, zyh","code":0}
// 效果和上面一样


// 如果在创建 Promise 实例时，有段耗时的代码，则会造成阻塞
function request_promise_sync() {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < 2 * (10 ** 9); i++) { }
        let formData = new FormData();
        formData.append("name", "zyh");

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1:4001/helloworld");
        xhr.send(formData);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.response);
            }
        }
    })
}

// request_promise_sync().then((value) => {
//     console.log(value);
// })
// otherFunc();
// expect output: "otherFunc", {"message":"创建成功","data":"helloworld, zyh","code":0}
// 阻塞几秒后，输出 "otherFunc"，再阻塞几秒后，请求成功，输出 {"message":"创建成功",...



// 改成异步
function request_promise_async() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < 2 * (10 ** 9); i++) { }
            let formData = new FormData();
            formData.append("name", "zyh");

            let xhr = new XMLHttpRequest();
            xhr.open("POST", "http://127.0.0.1:4001/helloworld");
            xhr.send(formData);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.response);
                }
            }
        }, 0);
    })
}

// request_promise_async().then((value) => {
//     console.log(value);
// })
// otherFunc();
// expect output: "otherFunc", {"message":"创建成功","data":"helloworld, zyh","code":0}
// 马上输出 "otherFunc"，延迟几秒后输出 {"message":"创建成功",...




// 实现一个 sleep 函数
function sleep(second) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            // reject();
        }, second * 1000)
    })
}
// (async () => {
//     console.log("first come");
//     await sleep(3);
//     console.log("after 3 seconds");
// })();
// test();
// 先打印出"first come"，3秒后打印出"after 3 seconds"
