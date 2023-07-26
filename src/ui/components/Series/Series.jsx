
import { useState } from 'react';

import './Series.css';
import { createEmptyImageDataUrl } from '../../../core/services/CreateEmptyImage/CreateEmptyImageDataUrl';
import { SeriesOptions } from './components/SeriesOptions/SeriesOptions';

export const Series = ({chartData, seriesData, mainImageId, displayWidth, displayHeight})=>{

    const canvasId = 'series__' + seriesData.key;

    const [seriesImageDataUrls, setSeriesImageDataUrls] = useState([seriesData.dataUrl]);

    const [isActive, setIsActive] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [canvasVisible, setCanvasVisible] = useState(true);
    const [fillColor, setFillColor] = useState(seriesData.fillColor);
    const [fillMode, setFillMode] = useState('point');

    
    return(
        <>
            <SeriesOptions
                seriesName = {seriesData.name}
                isActive = {isActive}
                setIsActive = {setIsActive}
                isVisible = {isVisible}
                setIsVisible = {setIsVisible}
                fillColor = {fillColor}
                setFillColor = {setFillColor}
                fillMode = {fillMode}
                setFillMode = {setFillMode}
            />
                
        </>
    )

}