

let a = 0
let obj = {
    a:9,
    s:()=>{
        console.log(this.a);
    }
}
obj.s();