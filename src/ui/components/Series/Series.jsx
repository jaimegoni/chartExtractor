
import { useState } from 'react';

import './Series.css';
import { createEmptyImageDataUrl } from '../../../core/services/CreateEmptyImage/CreateEmptyImageDataUrl';

export const Series = ({chartData, seriesData, mainImageId, displayWidth, displayHeight})=>{

    const canvasId = 'series__' + seriesData.key;

    const [seriesImageDataUrls, setSeriesImageDataUrls] = useState([seriesData.dataUrl]);

    const [isActive, setIsActive] = useState(false);
    const [canvasVisible, setCanvasVisible] = useState(true);
    const [fillColor, setFillColor] = useState(seriesData.fillColor);
    const [fillMode, setFillMode] = useState('point');

    
    return(
        <>
                
        </>
    )

}