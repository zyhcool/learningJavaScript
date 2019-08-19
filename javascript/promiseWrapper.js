
function checkTitle(title) {
    return typeof title === "string" && title.includes("title");
}

function checkContent(content, splitedTitle) {
    if (typeof content === "string" && content.includes("content")) {
        return true;
    }
    return false;
}

function getSource(content) {
    if (typeof content === "string" && content.includes("source")) {
        return true;
    }
    return false;
}

function spliteTitle(title, cb) {
    setTimeout(() => {
        const num = Math.floor(Math.random() * 4); // num 取值 0 1 2 3
        if (num === 2 || typeof title !== "string") {
            cb(new Error("jjjjj"));
        } else {
            cb(null, title.split(""));
        }
    }, 0);
}




let promiseWrapper = function (func) {
    return function (err, ...args) {
        return new Promise((resolve, reject) => {
            // try {
            //     let data = func.apply(null, args);
            //     resolve(data);
            // } catch (err) {
            //     reject(err);
            // }
            let flag = func.apply(null, args);
            if (flag) {
                resolve(flag);
            } else {
                reject(err);
            }
        })
    }
}

let promiseCallbackWrapper = function (func) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            let cb = (err, data) => {
                if (err) {
                    reject(err.message);
                } else {
                    resolve(data || "resolve");
                }
            }
            args.push(cb);
            func.apply(null, args);
        })
    }
}


let checkTitle_promise = promiseWrapper(checkTitle);
let checkContent_promise = promiseWrapper(checkContent);
let getSource_promise = promiseWrapper(getSource);
let spliteTitle_promise = promiseCallbackWrapper(spliteTitle);


function checkArticle(title, content) {
    let splitedTitle = [];
    checkTitle_promise("title error", title)
        .then((v) => {
            return spliteTitle_promise(title);
        })
        .then((res) => {
            splitedTitle = res.concat();
            return checkContent_promise("checkcontent error", content, splitedTitle);
        })
        .then((v) => {
            return getSource_promise("getSource error", content);
        })
        .then((source) => {
            if (source) {
                console.log("success Article", source, splitedTitle);
            } else {
                console.error("failed");
            }
        })
        .catch((err) => {
            console.log(err);
        })
}

let title = "title hahahh";
let content = "content source";
checkArticle(title, content)