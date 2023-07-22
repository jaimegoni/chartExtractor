
import './ChartVisualizationForm.css';

import { SliderSwitch } from '../SliderSwitch/SliderSwitch';

export const ChartVisualizationForm = ({chartData, displayWidth, setDisplayDimensions, activateZoom, setActivateZoom, zoom, setZoom})=>{

    const modifyDisplayWidth = (event)=>{
        
        setDisplayDimensions({
            displayWidth: Number(event.target.value),
            displayHeight: Math.round(event.target.value * chartData.imageHeight / chartData.imageWidth)
        })

    }

    return(
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
                    <option value={6}>6</option>
                </select>
            </div>
        </div>
    )
}