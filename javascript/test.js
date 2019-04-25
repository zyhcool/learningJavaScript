

let arr = [1, 3, 5];
let promises = arr.map(async (num) => {
    return await returnSomething(num);
})

async function returnSomething(num) {
    if (num === 3) {
        for (let i = 0; i < 2 * (10 ** 9); i++) { }
        console.log(num);
    } else {
        console.log(num);
    }
}
await Promise.all(promises);