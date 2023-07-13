import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './ChartExtractorView.css';

import { StandardView } from "../../templates/StandardView/StandardView";
import { getStoredChartByKey } from "../../../core/services/ChartsRegister/GetStoredChartByKey";

import { ChartImage } from "../../components/ChartImage/ChartImage";
import { AxisSelector } from "../../components/AxisSelector/AxisSelector";
import { useClickPosition } from "../../../core/hooks/useClickPosition";


export const ChartExtractorView = ()=>{

    const imageId = "chartImageId";

    const { chartKey } = useParams();

    const [chartData, setChartData] = useState(getStoredChartByKey(chartKey));
    const [isSelectingAxis, setIsSelectingAxis] = useState(true);

    const {targetClicked, xClickedPosition, yClickedPosition} = useClickPosition(imageId);

    useEffect(()=>{console.log({targetClicked, xClickedPosition, yClickedPosition})},[targetClicked, xClickedPosition, yClickedPosition])

    return(
        <StandardView>
            <div className="page__container--div">
                <h1>Chart name: {chartData.chartName}</h1>
                <br/>

                <ChartImage
                    imageId={imageId}
                    chartData={chartData}
                />

                <AxisSelector
                    isActive = {isSelectingAxis}
                    setIsActive = {setIsSelectingAxis}
                    chartData = {chartData}
                />

            </div>
        </StandardView>
    )
}