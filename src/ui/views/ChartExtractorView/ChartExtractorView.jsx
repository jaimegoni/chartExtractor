import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './ChartExtractorView.css';

import { StandardView } from "../../templates/StandardView/StandardView";
import { getStoredChartByKey } from "../../../core/services/ChartsRegister/GetStoredChartByKey";
import { useMouseOver } from "../../../core/hooks/useMouseOver";
import { MagnifierGlass } from "../../components/MagnifierGlass/MagnifierGlass";

export const ChartExtractorView = ()=>{

    const imageId = "chartImageId";

    const { chartKey } = useParams();

    const [chartData, setChartData] = useState(getStoredChartByKey(chartKey));
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

    return(
        <StandardView>
            <div className="page__container--div">
                <h1>Chart name: {chartData.chartName}</h1>
                <br/>
                <label style={{marginBottom:"0.25em"}}>Chart display width (pixels):</label>
                <input type="number" value={displayWidth} onChange={modifyDisplayWidth}/>
                <br/>
                <img
                    id={imageId}
                    className="chart__image--img"
                    src={chartData.b64image}
                    alt="chartImage"
                    style={{width: displayWidth, height:displayHeight}}
                />
                {
                    isOveringTarget
                        &&
                    <MagnifierGlass
                        xPosition = {xPosition}
                        yPosition = {yPosition}
                        imgSrc = {chartData.b64image}
                        targetImgId = {imageId}
                    />
                }
            </div>
        </StandardView>
    )
}