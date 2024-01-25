import * as canvas from './canvas.js';

let count = 0;
const init = e => {
    console.log("init called");
    let canvasElement = document.querySelector("canvas");
    canvas.setupCanvas(canvasElement);
    loop();
}

const loop = e =>{
    if(count <= 10000)
    {
        setTimeout(loop, 1000/120);
        canvas.draw()
        //count++;
    }
}
export {init};