
import { useState, useEffect } from 'react';

import './ChartImage.css';

import { useMouseOver } from '../../../core/hooks/useMouseOver';
import { MagnifierGlass } from '../MagnifierGlass/MagnifierGlass';
import { SliderSwitch } from '../SliderSwitch/SliderSwitch';
import { AxisSelector } from '../AxisSelector/AxisSelector';
import { LocationNote } from '../AxisSelector/components/LocationNote';

export const ChartImage = ({imageId, chartData, setChartData, displayWidth, displayHeight, activateZoom, zoom})=>{

    const [asdf, setAsdf] = useState(false);

    const {xPosition, yPosition, isOveringTarget} = useMouseOver(imageId);

    useEffect(()=>{setAsdf(true)},[])

    return (
        <>
            <img
                id={imageId}
                className="chart__image--img"
                src={chartData.b64image}
                alt="chartImage"
                style={{width: displayWidth, height:displayHeight}}
            />
            {
                (isOveringTarget && activateZoom)
                    &&
                <MagnifierGlass
                    xPosition = {xPosition}
                    yPosition = {yPosition}
                    imgSrc = {chartData.b64image}
                    targetImgId = {imageId}
                    zoom={zoom}
                />
            }
            {
                    ((chartData.selectedAxis.length > 0) && asdf)
                        &&
                    chartData.selectedAxis.map((axisData)=>(
                        <LocationNote
                            key = {axisData.key}
                            axisData = {axisData}
                            chartData = {chartData}
                            setChartData = {setChartData}
                            imageId = {imageId}
                            displayWidth = {displayWidth}
                        />
                    ))
                }
        </>
    )
}