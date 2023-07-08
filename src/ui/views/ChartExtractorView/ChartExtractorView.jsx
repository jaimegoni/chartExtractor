import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './ChartExtractorView.css';

import { StandardView } from "../../templates/StandardView/StandardView";
import { getStoredChartByKey } from "../../../core/services/ChartsRegister/GetStoredChartByKey";

export const ChartExtractorView = ()=>{

    const { chartKey } = useParams();

    const [chartData, setChartData] = useState(getStoredChartByKey(chartKey));
    const [{displayWidth, displayHeight}, setDisplayWidth] = useState({
        displayWidth: chartData.imageWidth,
        displayHeight: chartData.imageHeight
    });

    const modifyDisplayWidth = (event)=>{
        
        setDisplayWidth({
            displayWidth: event.target.value,
            displayHeight: Math.round(event.target.value * chartData.imageHeight / chartData.imageWidth)
        })

    }

    return(
        <StandardView>
            <div className="page__container--div">
                <h1>Chart name: {chartData.chartName}</h1>
                <br/>
                <label>Chart display width:</label>
                <input type="number" value={displayWidth} onChange={modifyDisplayWidth}/>
                <br/>
                <img className="chart__image--img" src={chartData.b64image} alt="chartImage" style={{width: displayWidth, height:displayHeight}}/>
            </div>
        </StandardView>
    )
}