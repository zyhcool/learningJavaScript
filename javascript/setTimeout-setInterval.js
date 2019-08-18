
let i = 0;
// setInterval(() => {
//     if (i === 2) {
//         for (let j = 0; j < 2 * (10 ** 9); j++) { };
//     }
//     console.log(i);
//     i++;
// }, 1000);
// 结果：每间隔1秒打印出 0,1,2 后，又延迟几秒后，3,4,5几乎同时按顺序打印出来
// setInterval 的 timeout 是指每次执行函数开始的时间间隔

// let interval = function (timeout) {
//     setTimeout(() => {
//         if (i === 2) {
//             for (let j = 0; j < 2 * (10 ** 9); j++) { };
//         }
//         console.log(i);
//         i++;
//         interval(timeout);
//     }, timeout)
// }
// interval(1000);
// 结果：每间隔1秒打印出 0,1,2 后，延迟几秒，3,4,5 也每间隔1秒打印出来
// setTimeout 的 timeout 是指上一次执行函数结束和下一次执行函数开始的时间间隔

// console.log("start");
// setTimeout(() => {
//     if (i === 2) {
//         for (let j = 0; j < 2 * (10 ** 9); j++) { };
//     }
//     console.log(i);
//     i++;
// }, 1000)
// setTimeout(() => {
//     if (i === 2) {
//         for (let j = 0; j < 2 * (10 ** 9); j++) { };
//     }
//     console.log(i);
//     i++;
// }, 1000)
// setTimeout(() => {
//     if (i === 2) {
//         for (let j = 0; j < 2 * (10 ** 9); j++) { };
//     }
//     console.log(i);
//     i++;
// }, 1000)
// setTimeout(() => {
//     if (i === 2) {
//         for (let j = 0; j < 2 * (10 ** 9); j++) { };
//     }
//     console.log(i);
//     i++;
// }, 1000)
// 结果：快速打印出 0、1、2，延迟几秒后打印出 3、4、5 ，之所以这里的 settimeout 和上面通过函数递归
// 调用的结果不太一样，这里的 6 个 settimeout 是几乎同时调用并将回调函数放进任务队列中；而上面函数递归法
// 是每次只有一个 settimeout 的回调函数在任务队列里面，等该任务被拿到主线程被执行后，该任务再次调用递归函
// 数并将下一个 settimeout 加入任务队列中


// console.time('time');
// console.log("start");
// setTimeout(() => {
//     if (i === 2) {
//         for (let j = 0; j < 2 * (10 ** 9); j++) { };
//     }
//     console.log(i,"8s timeout");
//     i++;
// }, 20000)
// setTimeout(() => {
//     if (i === 2) {
//         for (let j = 0; j < 2 * (10 ** 9); j++) { };
//     }
//     console.log(i);
//     i++;
// }, 1000)
// setTimeout(() => {
//     if (i === 2) {
//         for (let j = 0; j < 2 * (10 ** 9); j++) { };
//     }
//     console.log(i);
//     i++;
// }, 1000)
// setTimeout(() => {
//     if (i === 2) {
//         for (let j = 0; j < 2 * (10 ** 9); j++) { };
//     }
//     console.log(i);
//     i++;
// }, 1000)
// for (let j = 0; j < 2 * (10 ** 9); j++) { };
// for (let j = 0; j < 2 * (10 ** 9); j++) { };
// console.timeEnd("time")


let func = async function(){
    setTimeout(() => {
        console.log("settimeout");
    }, 0);
    console.log("start");
    // Promise.resolve().then(()=>{
    //     console.log("promise")
    // })
    // let promise = async function(){
    //     return new Promise((resolve,reject)=>{
    //         console.log("init promise");
    //         resolve("resolve")
    //     })
    // }
    new Promise((resolve,reject)=>{
        console.log("init promise");
        resolve("resolve")
    }).then((res)=>{
        console.log(res)
    })
    // promise();
    // console.log(en);
    
    // promise().then((res)=>console.log(res));
    
    console.log("end");
}
console.log("1111")
func();
console.log("2222")