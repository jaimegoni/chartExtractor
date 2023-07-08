
import { useState, useEffect } from "react"


export const useMouseOver = (targetElementId) =>{

    let xPosition = 0;
    let yPosition = 0;

    const [isOveringTarget, setIsOveringTarget] = useState(false);


    const onMouseOver = (event)=>{
        setIsOveringTarget(true);
        xPosition = event.pageX;
        yPosition = event.pageY;

    }

    const onMouseMove = (event)=>{
        xPosition = event.pageX;
        yPosition = event.pageY;
    }

    const onMouseOut = (event)=>{
        setIsOveringTarget(false);
        xPosition = 0;
        yPosition = 0;
    }

    useEffect(()=>{
        document.getElementById(targetElementId).addEventListener("mouseover",onMouseOver);
        document.getElementById(targetElementId).addEventListener("mousemove",onMouseMove);
        document.getElementById(targetElementId).addEventListener("mouseout", onMouseOut);

        return(()=>{
            document.getElementById(targetElementId).removeEventListener("mouseover",onMouseOver);
            document.getElementById(targetElementId).removeEventListener("mousemove",onMouseMove);
            document.getElementById(targetElementId).removeEventListener("mouseout",onMouseOut);
        })

    },[])

    return({xPosition, yPosition, isOveringTarget})
}