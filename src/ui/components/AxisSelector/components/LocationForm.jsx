
import { useState, useEffect } from "react";

import { createUniqueKey } from "../../../../core/services/RandomKey/CreateUniqueKey";
import { updateChart } from "../../../../core/services/ChartsRegister/UpdateChart";

import { LocationIcon } from "./LocationIcon/LocationIcon"
import { PositionForm } from "./PositionForm/PositionForm"


export const LocationForm = ({axisData, chartData, setChartData, imageId})=>{

    const displayImage = document.getElementById(imageId);

    const [isActive, setIsActive] = useState(false);

    const [{xPos, yPos}, setPosition] = useState({
        xPos: displayImage.offsetLeft + Math.round(axisData.xPixelCoordinate * displayImage.offsetWidth / chartData.imageWidth),
        yPos: displayImage.offsetTop + Math.round(axisData.yPixelCoordinate * displayImage.offsetHeight / chartData.imageHeight)
    })

    const updateLocation = (xRealCoordinate, yRealCoordinate)=>{
        const updatedLocation = {
            ...axisData,
            xRealCoordinate,
            yRealCoordinate
        }

        const updatedSelectedAxis = chartData.selectedAxis.filter((axis)=>(!(axis.key === axisData.key)));
        const updatedChart = {
            ...chartData,
            selectedAxis: [...updatedSelectedAxis, updatedLocation]
        }
        updateChart(updatedChart);
        setChartData(updatedChart);
        setIsActive(false);

    }

    const deleteLocation = ()=>{
        const updatedChart = {
            ...chartData,
            selectedAxis: chartData.selectedAxis.filter((axis)=>(!(axis.key === axisData.key)))
        }
        updateChart(updatedChart);
        setChartData(updatedChart);
        setIsActive(false);

    }

    const onPageResize = ()=>{
        setPosition({
            xPos: displayImage.offsetLeft + Math.round(axisData.xPixelCoordinate * displayImage.offsetWidth / chartData.imageWidth),
            yPos: displayImage.offsetTop + Math.round(axisData.yPixelCoordinate * displayImage.offsetHeight / chartData.imageHeight)
        });

    }

    useEffect(()=>{
        window.addEventListener('resize', onPageResize);
        return(()=>{window.removeEventListener('resize', onPageResize)})
    },[])


    return(
        <>
            <LocationIcon
                xPosition = {xPos - 16}
                yPosition = {yPos - 16}
                isActive = {isActive}
                setActive = {setIsActive}
            />
            <PositionForm
                xPosition = {xPos + 30}
                yPosition = {yPos}
                setFormActive = {setIsActive}
                onSaveForm = {updateLocation}
            />
        </>
    )
}