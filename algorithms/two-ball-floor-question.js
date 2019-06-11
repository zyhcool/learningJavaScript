
let time = 0;

let max = function (a, b) {
    return a >= b ? a : b;
}

let fn = function (start, end, num = 2, even = 10) {
    time += 1;
    if (num === 1) {
        return 1 + end - start;
    }
    if (end - even * time < even) {
        // 达到最顶端时
        return 1 + max(fn(start, even * time - 1, 1, even), end - start);
    } else {
        return 1 + max(fn(start, even * time - 1, 1, even), fn(even * time + 1, end, 2, even));
    }
}

// 楼层高度
const end = 83;

let min = end;
for (let i = 1; i <= end; i++) {
    let a = fn(1, end, 2, i);
    if (min >= a) {
        min = a;
    }
    time = 0;
}
console.log(min); // 13

// 83层楼 2颗球 最少需要 13 次投球