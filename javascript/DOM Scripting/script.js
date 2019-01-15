
let moveHorizontal = (ele, step) => {
    ele.style.left = parseFloat(ele.style.left) + step + "px";
}

let moveVertical = (ele, step) => {
    ele.style.top = parseFloat(ele.style.top) + step + "px";
}

let moveDoubleWay = (ele, x, y) => {
    moveHorizontal(ele, x);
    moveVertical(ele, y);
}

let easeOut = (ele, xTar, yTar) => {
    timer = setInterval(() => {
        let xPos = parseFloat(ele.offsetLeft);
        let yPos = parseFloat(ele.offsetTop);
        let xstep = (xTar - xPos) / 10;
        let ystep = (yTar - yPos) / 10;
        if (Math.abs(xPos - xTar) <= 0.1 || Math.abs(yPos - yTar) <= 0.1) {
            clearInterval(timer);
            ele.style.left = xTar + "px";
            ele.style.top = yTar + "px";
            return;
        }
        moveDoubleWay(ele, xstep, ystep);
    }, 50);
}