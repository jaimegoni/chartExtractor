import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './ChartExtractorView.css';

import { StandardView } from "../../templates/StandardView/StandardView";
import { getStoredChartByKey } from "../../../core/services/ChartsRegister/GetStoredChartByKey";

import { ChartImage } from "../../components/ChartImage/ChartImage";
import { AxisSelector } from "../../components/AxisSelector/AxisSelector";
import { useClickPosition } from "../../../core/hooks/useClickPosition";
import { CreationNote } from "../../components/AxisSelector/components/CreationNote";
import { ChartVisualizationForm } from "../../components/ChartVisualizationForm/ChartVisualizationForm";
import { NewSeriesForm } from "../../components/NewSeriesForm/NewSeriesForm";
import { Series } from "../../components/Series/Series";

export const ChartExtractorView = ()=>{

    const imageId = "chartImageId";

    const seriesData = {
        key: "asdf",
        name: "Example",
        dataUrl: "asdf",
        fillColor: "#ff0000"
    }

    const { chartKey } = useParams();

    const [chartData, setChartData] = useState(getStoredChartByKey(chartKey));
    const [isSelectingAxis, setIsSelectingAxis] = useState(true);
    
    const [showTemporalAxisForm, setShowTemporalAxisForm] = useState(false);

    const {targetClicked, xClickedPosition, yClickedPosition} = useClickPosition(imageId);
    
    const [activateZoom, setActivateZoom] = useState(true);
    const [zoom, setZoom] = useState(3);

    const [{displayWidth, displayHeight}, setDisplayDimensions] = useState({
        displayWidth: chartData.imageWidth,
        displayHeight: chartData.imageHeight
    });

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
                <div className="chart__container--div">
                    <h1>Chart name: {chartData.chartName}</h1>
                    <br/>
                    <ChartImage
                        imageId={imageId}
                        chartData={chartData}
                        setChartData = {setChartData}
                        displayWidth = {displayWidth}
                        displayHeight = {displayHeight}
                        activateZoom = {activateZoom}
                        zoom = {zoom}
                    />
                    
                    {
                        showTemporalAxisForm
                            &&
                        <CreationNote
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
                <div className="actions__container--div">
                    <ChartVisualizationForm
                        chartData = { chartData}
                        displayWidth = {displayWidth}
                        setDisplayDimensions = {setDisplayDimensions}
                        activateZoom = {activateZoom}
                        setActivateZoom = {setActivateZoom}
                        zoom={zoom}
                        setZoom = {setZoom}
                    />
                    <AxisSelector
                        isActive = {isSelectingAxis}
                        setIsActive = {setIsSelectingAxis}
                        chartData = {chartData}
                    />
                    <NewSeriesForm/>
                    <Series
                        chartData = {chartData}
                        seriesData = {seriesData}
                        mainImageId = {imageId}
                        displayWidth = {displayWidth}
                        displayHeight = {displayHeight}
                    />
                </div>

            </div>
        </StandardView>
    )
}
