const fs = require("fs");

// if (!fs.existsSync("hahaha/hehehe")) {
//     console.log("xixixi");
//     fs.mkdirSync("hehehe");
// }
// fs.openSync("hahaha", "a");
// fs.mkdirSync("hhhhh2")
// console.log(fs.existsSync("xixixi/hehehe/package.json"));

// let json = fs.readFileSync("package.json");
// console.log(json);

// fs.writeFileSync("xixixi/hehehe/endhfei/package.json", json);



let pathStr = "111/222/333/hello.jpg";
let pathSnippets = pathStr.split("/").filter((str) => str);

let paths = [];
for (let i = 0; i < pathSnippets.length; i++) {
    let en = pathSnippets.slice(0, i + 1);
    paths.push(en.join("/"));
}
console.log(paths);

