let express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// app.use(express.static("public"));

app.use("/", (req, res) => {
    const rs = fs.createReadStream(path.join(__dirname, "public", "ha.jpg"));
    console.log(res);
    rs.pipe(res);
});

app.listen(3000, () => {
    console.log("listening at 3000");
});
