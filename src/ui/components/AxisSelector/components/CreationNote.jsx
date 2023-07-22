
import { useState, useEffect } from "react";

import { createUniqueKey } from "../../../../core/services/RandomKey/CreateUniqueKey";
import { updateChart } from "../../../../core/services/ChartsRegister/UpdateChart";

import { LocationIcon } from "./LocationIcon/LocationIcon";
import { CreationForm } from "./CreationForm/CreationForm";


export const CreationNote = ({xPosition, yPosition, chartData, setChartData, imageId, isActive, setActive})=>{

    const displayImage = document.getElementById(imageId);

    const [{xPos, yPos}, setPosition] = useState({
        xPos: xPosition,
        yPos: yPosition
    })

    const [{xPixelCoordinate, yPixelCoordinate}, setRealCoordinates] = useState({
        xPixelCoordinate: Math.round((xPosition - displayImage.offsetLeft) * chartData.imageWidth / displayImage.offsetWidth),
        yPixelCoordinate: Math.round((yPosition - displayImage.offsetTop) * chartData.imageHeight / displayImage.offsetHeight)
    })


    const saveLocationForm = (xRealCoordinate, yRealCoordinate) =>{

        const existingKeys = chartData.selectedAxis.map((axis)=>(axis.key));
        const locationKey = createUniqueKey("axis_", existingKeys, 10);

        const newLocation = {
            key: locationKey,
            xPixelCoordinate,
            yPixelCoordinate,
            xRealCoordinate,
            yRealCoordinate
        }

        const updatedChart = {
            ...chartData,
            selectedAxis: [...chartData.selectedAxis, newLocation]
        }

        updateChart(updatedChart);
        setChartData(updatedChart);
        setActive(false);

    }

    const onPageResize = ()=>{
        setPosition({
            xPos: displayImage.offsetLeft + Math.round(xPixelCoordinate * displayImage.offsetWidth / chartData.imageWidth),
            yPos: displayImage.offsetTop + Math.round(yPixelCoordinate * displayImage.offsetHeight / chartData.imageHeight)
        });

    }

    useEffect(()=>{
        window.addEventListener('resize', onPageResize);
        return(()=>{window.removeEventListener('resize', onPageResize)})
    },[])

    useEffect(()=>{
        setPosition({
            xPos: xPosition,
            yPos: yPosition
        });
        setRealCoordinates({
            xPixelCoordinate: Math.round((xPosition - displayImage.offsetLeft) * chartData.imageWidth / displayImage.offsetWidth),
            yPixelCoordinate: Math.round((yPosition - displayImage.offsetTop) * chartData.imageHeight / displayImage.offsetHeight)
        })
    }, [xPosition, yPosition])

    return(
        <>
            <LocationIcon
                xPosition = {xPos - 16}
                yPosition = {yPos - 16}
                isActive = {isActive}
                setActive = {setActive}
            />
            <CreationForm
                xPosition = {xPos + 30}
                yPosition = {yPos}
                setFormActive = {setActive}
                onSaveForm = {saveLocationForm}
            />
        </>
    )
}