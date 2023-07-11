
import { useState, useEffect } from "react"


export const useMouseOver = (targetElementId) =>{


    const [isOveringTarget, setIsOveringTarget] = useState(false);
    const [{xPosition, yPosition}, setMouseCoordinates] = useState({
        xPosition: 0,
        yPosition: 0
    })


    const onMouseOver = (event)=>{
        setIsOveringTarget(true);
        setMouseCoordinates({
            xPosition: Math.round(event.pageX),
            yPosition: Math.round(event.pageY)
        })

    }

    const onMouseMove = (event)=>{
        setMouseCoordinates({
            xPosition: Math.round(event.pageX),
            yPosition: Math.round(event.pageY)
        })
    }

    const onMouseOut = (event)=>{
        setIsOveringTarget(false);
        setMouseCoordinates({
            xPosition: 0,
            yPosition: 0
        })
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