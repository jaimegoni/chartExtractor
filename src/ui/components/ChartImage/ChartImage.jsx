
import { useState, useEffect } from 'react';

import './ChartImage.css';

import { useMouseOver } from '../../../core/hooks/useMouseOver';
import { MagnifierGlass } from '../MagnifierGlass/MagnifierGlass';
import { SliderSwitch } from '../SliderSwitch/SliderSwitch';
import { AxisSelector } from '../AxisSelector/AxisSelector';
import { LocationForm } from '../AxisSelector/components/LocationForm';

export const ChartImage = ({imageId, chartData, setChartData})=>{

    const [activateZoom, setActivateZoom] = useState(true);
    const [zoom, setZoom] = useState(3);
    const [asdf, setAsdf] = useState(false);

    const [{displayWidth, displayHeight}, setDisplayWidth] = useState({
        displayWidth: chartData.imageWidth,
        displayHeight: chartData.imageHeight
    });
    
    const {xPosition, yPosition, isOveringTarget} = useMouseOver(imageId)

    const modifyDisplayWidth = (event)=>{
        
        setDisplayWidth({
            displayWidth: Number(event.target.value),
            displayHeight: Math.round(event.target.value * chartData.imageHeight / chartData.imageWidth)
        })

    }

    useEffect(()=>{setAsdf(true)},[])

    return (
        <>
            <div className='actions--div'>
                <div className='display__width--div'>
                    <label>Chart display width (pixels):</label>
                    <input className='display__width--input' type="number" value={displayWidth} onChange={modifyDisplayWidth}/>
                </div>
                <div className='magnifier__activation--div'>
                    <SliderSwitch active={activateZoom} setActive={setActivateZoom}/>
                    <label className='display__width--label'>Magnifier glass zoom:</label>
                    <select value={zoom} onChange={(e)=>{setZoom(Number(e.target.value))}}>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
            </div>
            <br/>
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
                        <LocationForm
                            key = {axisData.key}
                            axisData = {axisData}
                            chartData = {chartData}
                            setChartData = {setChartData}
                            imageId = {imageId}
                        />
                    ))
                }
        </>
    )
}