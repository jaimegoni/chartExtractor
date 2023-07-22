import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './ChartExtractorView.css';

import { StandardView } from "../../templates/StandardView/StandardView";
import { getStoredChartByKey } from "../../../core/services/ChartsRegister/GetStoredChartByKey";

import { ChartImage } from "../../components/ChartImage/ChartImage";
import { AxisSelector } from "../../components/AxisSelector/AxisSelector";
import { useClickPosition } from "../../../core/hooks/useClickPosition";
import { CreationLocationForm } from "../../components/AxisSelector/components/CreationLocationForm";


export const ChartExtractorView = ()=>{

    const imageId = "chartImageId";

    const { chartKey } = useParams();

    const [chartData, setChartData] = useState(getStoredChartByKey(chartKey));
    const [isSelectingAxis, setIsSelectingAxis] = useState(true);
    
    const [showTemporalAxisForm, setShowTemporalAxisForm] = useState(false);

    const {targetClicked, xClickedPosition, yClickedPosition} = useClickPosition(imageId);

    useEffect(()=>{

        if ((xClickedPosition> 0) && (yClickedPosition > 0)){
            if (isSelectingAxis){
                setShowTemporalAxisForm(true);
            }
        }
        else{
            setShowTemporalAxisForm(false);
        }
    },[xClickedPosition, yClickedPosition])

    useEffect(()=>{
        if(!isSelectingAxis){
            setShowTemporalAxisForm(false);
        }
    },[isSelectingAxis])

    return(
        <StandardView>
            <div className="page__container--div">
                <h1>Chart name: {chartData.chartName}</h1>
                <br/>

                <ChartImage
                    imageId={imageId}
                    chartData={chartData}
                    setChartData = {setChartData}
                />

                <AxisSelector
                    isActive = {isSelectingAxis}
                    setIsActive = {setIsSelectingAxis}
                    chartData = {chartData}
                />
                {
                    showTemporalAxisForm
                        &&
                    <CreationLocationForm
                        xPosition = {xClickedPosition}
                        yPosition = {yClickedPosition}
                        chartData = {chartData}
                        setChartData = {setChartData}
                        imageId = {imageId}
                        isActive = {showTemporalAxisForm}
                        setActive = {setShowTemporalAxisForm}
                    />
                }

            </div>
        </StandardView>
    )
}
