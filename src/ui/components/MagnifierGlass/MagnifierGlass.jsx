
import { useState, useEffect } from 'react';

import './MagnifierGlass.css';

export const MagnifierGlass = ({xPosition, yPosition, imgSrc, targetImgId, zoom}) =>{

    const magnifierWidth = 150;
    const magnifierHeight = 150;

    const targetImg = document.getElementById(targetImgId);

    const basicMagnifierStyle = {
        width: `${magnifierWidth}px`,
        height: `${magnifierHeight}px`,

        backgroundImage: `url("${imgSrc}")`,
        backgroundRepeat: "no-repeat",

        backgroundSize: `${targetImg.offsetWidth * zoom}px ${targetImg.offsetHeight * zoom}px`,
    }

    const[magnifierGlassStyle, setMagnifierGlassStyle ] = useState({

        left: `${xPosition}px`,
        top: `${yPosition}px`,

        backgroundPosition: `-${0}px -${0}px`,
    });

    useEffect(()=>{
        
        const x_original = xPosition - Math.round(targetImg.offsetLeft);
        const y_original = yPosition - Math.round(targetImg.offsetTop);

        const x = -1*(zoom * x_original - magnifierWidth/2);
        const y = -1*(zoom * y_original - magnifierHeight/2);

        setMagnifierGlassStyle({
            ...magnifierGlassStyle,
            left: `${xPosition}px`,
            top: `${yPosition}px`,
            backgroundPosition: `${x}px ${y}px`,
        });
    }
    ,[xPosition,yPosition])

    return (
        <div
            className='magnifier__glass--div'
            style={
                    {
                        ...basicMagnifierStyle,
                        ...magnifierGlassStyle
                    }
                }
        >
            <b style={{fontWeight:"bolder", color:"red"}}>+</b>
        </div>
    );


}