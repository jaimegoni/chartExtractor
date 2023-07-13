
import { useState, useEffect } from "react";

export const useClickPosition = (targetElementId) =>{

    const defaultClickedPosition = {xClickedPosition:0, yClickedPosition:0};

    const [{xClickedPosition, yClickedPosition}, setClickedPosition] = useState(defaultClickedPosition);
    const [targetClicked, setTargetClicked] = useState(false);

    const onPageClick = (event)=>{

        if (event.target.id === targetElementId){
            setTargetClicked(true);
            setClickedPosition({
                xClickedPosition: Math.round(event.pageX),
                yClickedPosition: Math.round(event.pageY)
            });
        }
        else{
            setTargetClicked(false);
            setClickedPosition(defaultClickedPosition);
        }

    };

    useEffect(()=>{
        document.addEventListener('click', onPageClick);

        return(()=>{document.removeEventListener('click', onPageClick)});
    },[]);

    return({targetClicked, xClickedPosition, yClickedPosition});

}