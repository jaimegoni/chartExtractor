
const areSameColor = ( firstColor, secondColor ) =>{

    const difference = [
        firstColor[0] -secondColor[0],
        firstColor[1] -secondColor[1],
        firstColor[2] -secondColor[2],
    ]

    if((Math.min(...difference) > -75) && (Math.max(...difference) <75)){
        return true;
    }
    else{
        return false;
    }
}

const addStepsToQueue = (queue, studied, x, y) => {

    let resultQueue = [... queue];

    let newX = x - 1;
    let newY = y;
    if (acceptNewPoint(studied, newX, newY)){
        resultQueue = [...resultQueue, [newX, newY]];
    }

    newX = x;
    newY = y - 1;
    if (acceptNewPoint(studied, newX, newY)){
        resultQueue = [...resultQueue, [newX, newY]];
    }

    newX = x + 1;
    newY = y;
    if (acceptNewPoint(studied, newX, newY)){
        resultQueue = [...resultQueue, [newX, newY]];
    }

    newX = x;
    newY = y + 1;
    if (acceptNewPoint(studied, newX, newY)){
        resultQueue = [...resultQueue, [newX, newY]];
    }


    return resultQueue;
    
}

const acceptNewPoint = (studied, newX, newY) => {
    const checkPosition = `[${newX},${newY}]`

    if( ( newX < 0 ) || ( newY < 0 ) || ( studied.includes(checkPosition) )){
        return false;
    }
    else{
        return true;
    }
}

export const floodFill = (x0, y0, canvasCtx)=>{

    let queue = [
        [x0, y0]
    ];

    let studied = [];

    const selectedColorPixel = canvasCtx.getImageData(x0, y0, 1, 1);
    const selectedColor = selectedColorPixel.data;

    // console.log("selected color: " + selectedColor);

    const newColorPixel = canvasCtx.getImageData(0, 0, 1, 1);
    const newColorPixelData = newColorPixel.data;
    newColorPixelData[0] = 255;
    newColorPixelData[1] = 0;
    newColorPixelData[2] = 0;

    while(!(queue.length < 1)){
        const [x, y] = queue[0];

        queue.shift();

        if(areSameColor(selectedColor, canvasCtx.getImageData(x, y, 1, 1).data)){
            canvasCtx.putImageData(newColorPixel, x, y);

            studied = [...studied, `[${x},${y}]`];

            queue = addStepsToQueue(queue, studied, x, y);
        }

        // console.log("Checked color: " + canvasCtx.getImageData(x, y, 1, 1).data);

    }

    // console.log(studied);

}