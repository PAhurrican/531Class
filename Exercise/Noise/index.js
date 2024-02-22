import FastNoiseLite from 'https://unpkg.com/fastnoise-lite@1.1.0/FastNoiseLite.js';
// https://github.com/Auburn/FastNoiseLite/tree/master/JavaScript#fastnoise-lite
        
let noise = new FastNoiseLite(0);
noise.SetNoiseType(FastNoiseLite.NoiseType.OpenSimplex2);
noise.SetFrequency(2.11);

let arrayColors = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];
let tx = 0;
let ty = 0;
const svgElement = document.querySelector('svg');
console.log('test1');

const addRect = (x, y, width, height, style, transform, stroke) => {
    const svgns = `http://www.w3.org/2000/svg`
    const rectNode = document.createElementNS(svgns, `rect`);

    rectNode.setAttribute(`x`, x);
    rectNode.setAttribute(`y`, y);
    rectNode.setAttribute(`width`, width);
    rectNode.setAttribute(`height`, height);
    rectNode.setAttribute(`style`, style);
    rectNode.setAttribute(`transform`, transform);
    rectNode.setAttribute('stroke', stroke)
    //rectNode.setAttribute('stroke-width, strokeWidth')
    svgElement.appendChild(rectNode);
}
/*
const Rotate = (degrees) => {

}
const translate = (up, down, left, right) => {

}
const scale = (scaleUp, scaleDown) => {

}
*/
const drawRects = () => {
    let padding = 5;
    let x = 10;
    let y = 10;
    for(let i = 1; i < 24; i++)
    {
        for(let k = 1; k < 13; k++)
        {
            //trans(addrect(),tranformdata)
            let test = Math.floor(Math.random() * i) + 10;
            addRect( x + (100 * k) , y + (100 * i), 100, 100, "fill:none", ``, "black");
            addRect( x + test + (100 * k) , y + noise + (100 * i), 100 - (test * 2), 100 - (test * 2), "fill:none", `rotate(${Math.floor(Math.random() * 2)})`, "black");
            test = test * Math.floor(Math.random() * i) + 10;
            addRect( x + test + (100 * k) , y + test + (100 * i), 100 - (test * 2), 100 - (test * 2), "fill:none", `rotate(${Math.floor(Math.random() * 2)})`, "black");
            test = test * Math.floor(Math.random() * i) + 10;
            addRect( x + test + (100 * k) , y + test + (100 * i), 100 - (test * 2), 100 - (test * 2), "fill:none", `rotate(${Math.floor(Math.random() * 2)})`, "black");
            test = test * Math.floor(Math.random() * i) + 10;
            addRect( x + test + (100 * k) , y + test + (100 * i), 100 - (test * 2), 100 - (test * 2), "fill:none", `rotate(${Math.floor(Math.random() * 2)})`, "black");
            test = test * Math.floor(Math.random() * i) + 10;
            addRect( x + test + (100 * k) , y + test + (100 * i), 100 - (test * 2), 100 - (test * 2), "fill:none", `rotate(${Math.floor(Math.random() * 2)})`, "black");
            test = test * Math.floor(Math.random() * i) + 10;
            addRect( x + test + (100 * k) , y + test + (100 * i), 100 - (test * 2), 100 - (test * 2), "fill:none", `rotate(${Math.floor(Math.random() * 2)})`, "black");
            addRect( x + test + (100 * k) , y + test + (100 * i), 100 - (test * 2), 100 - (test * 2), "fill:none", `rotate(${Math.floor(Math.random() * 2)})`, "black");
            test = test * Math.floor(Math.random() * i) + 10;
            addRect( x + test + (100 * k) , y + test + (100 * i), 100 - (test * 2), 100 - (test * 2), "fill:none", `rotate(${Math.floor(Math.random() * 2)})`, "black");
            test = test * Math.floor(Math.random() * i) + 10;
            addRect( x + test + (100 * k) , y + test + (100 * i), 100 - (test * 2), 100 - (test * 2), "fill:none", `rotate(${Math.floor(Math.random() * 2)})`, "black");
            test = test * Math.floor(Math.random() * i) + 10;
            addRect( x + test + (100 * k) , y + test + (100 * i), 100 - (test * 2), 100 - (test * 2), "fill:none", `rotate(${Math.floor(Math.random() * 2)})`, "black");
            test = test * Math.floor(Math.random() * i) + 10;
            addRect( x + test + (100 * k) , y + test + (100 * i), 100 - (test * 2), 100 - (test * 2), "fill:none", `rotate(${Math.floor(Math.random() * 2)})`, "black");
            test = test * Math.floor(Math.random() * i) + 10;
            addRect( x + test + (100 * k) , y + test + (100 * i), 100 - (test * 2), 100 - (test * 2), "fill:none", `rotate(${Math.floor(Math.random() * 2)})`, "black");

            x += 25;
            //y += 25;
        }
        x = 10;
        y += 25;
    }
}
drawRects();

