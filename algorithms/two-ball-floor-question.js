
let time = 0;

let max = function (a, b) {
    return a >= b ? a : b;
}

let fn = function (start, end, num = 2, even = 10) {
    time += 1;
    if (num === 1) {
        return end - start;
    }
    if (end - even * time < even) {
        // 达到最顶端时
        return 1 + max(fn(start, even * time - 1, 1, even), end - start);
    } else {
        return 1 + max(fn(start, even * time - 1, 1, even), fn(even * time + 1, end, 2, even));
    }
}

const end = 83;

for (let i = 1; i <= end; i++) {
    console.log(fn(1, end, 2, i));
    time = 0;
}

// 83层楼 2颗球 最多需要 12 次投球