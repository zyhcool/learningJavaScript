let pw = function (func, err) {
    return function (...args) {
        let b = func.apply(null, args);
        return new Promise((resolve, reject) => {
            if (b) {
                resolve(b);
            } else {
                reject(err)
            }
        })
    }
}

let ha = () => {
    console.log("ha");
    return false;
}
let dosome = function (name, cb) {
    setTimeout(() => {
        if (name === "zyh") {
            cb(null, name);
        } else {
            cb(new Error("not zyh"));
        }
    }, 0);
}

let pcw = function (func) {
    return function (...args) {
        // let cb = args.pop();
        return new Promise((resolve, reject) => {
            cb = function (...cbargs) {
                if (cbargs[0]) {
                    console.log("reject")
                    reject(cbargs[0]);
                } else {
                    console.log("resolve")
                    resolve(cbargs[1]);
                }
            }
            args.push(cb);
            console.log(func);
            func.apply(null, args);
        })
    }
}

pcw(dosome)("zyh")
    .then((v) => console.log(v))
    .catch((err) => console.log(err));


