// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8080);

'use strict';

const nodemailer = require("nodemailer");

// console.log(nodemailer);

let transporter = nodemailer.createTransport({
    service:"qq",
    secureConnection: true,
    auth:{
        user: "1806904196@qq.com",
        pass:"jtqbijuhnwqfbdae",
    }
});

let mailOptions={
    from:"Cool<1806904196@qq.com>",
    to:"18328097486@163.com",
    subject:"Hello",
    html:"<p>Hello World!</p>",
    attachments:[
        {
            filename:"my.html",
            content:"test attachments",
            path:"Index.html"
        }
    ]
};

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        return console.log(error);
    }
    console.log("Message sent !");
})