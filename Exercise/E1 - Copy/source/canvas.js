let ctx;
let x = 2;
let y = 2;
let circleX = 1;
let circleY = 1;
let colors = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];
let radius = 0;

const setupCanvas = (canvasElement) => {
    ctx = canvasElement.getContext("2d");
}
const draw = () =>
{
    editXandY();
    ctx.beginPath(); //The Start
    ctx.save();
    ctx.fillStyle = colors[Math.floor(Math.random() * 10) + 1];
    ctx.arc(x/*X*/,y/*Y*/,radius/*Radius*/, 0/*startAngle*/, 2*Math.PI/*EndAngle(360)*/, false/*CounterClockwise*/ );
    ctx.fill();
    ctx.restore();
    ctx.closePath();
}

const editXandY = () =>{
    y = (Math.random() * 10) * 10 - x;
    x = (Math.random() * 10) * 10 - y;
    if(x > 1920 || y > 1080)
    {
        y -= (Math.random() * 10) * 10;
        x -= (Math.random() * 10) * 10;
    }
    if(y < 0)
    {
        y = y * -1;
        
    }
    if(x < 0)
    {
        x = x * -1;
    }
    
    radius = (x-y)/5;
    if(radius < 0)
    {
        radius = radius*-1;
    }
    console.log('x: ',x);
    console.log('y: ',y);
    console.log('radius: ',radius);
}

export {draw, setupCanvas};