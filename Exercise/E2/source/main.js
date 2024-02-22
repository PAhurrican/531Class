const addRect = (x,y,width,height,style,transform) => {
    const svgns = `http://www.w3.org/2000/svg`
    const rectNode = document.createElementNS(svgns,`rect`);
    
    rectNode.setAttribute(`x`, x);
    rectNode.setAttribute(`y`, y);
    rectNode.setAttribute(`width`, width);
    rectNode.setAttribute(`height`, height);
    rectNode.setAttribute(`style`, style);
    rectNode.setAttribute(`transform`, transform);
    svgElement.appendChild(rectNode);
}

const Rotate = (degrees) =>{

}
const translate = (up,down,left,right) =>{

}
const scale = (scaleUp, scaleDown) =>{

}


const drawRects = () =>{
    
}