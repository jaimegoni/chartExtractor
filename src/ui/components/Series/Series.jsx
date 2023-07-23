
import { useState } from 'react';

import './Series.css';
import { createEmptyImageDataUrl } from '../../../core/services/CreateEmptyImage/CreateEmptyImageDataUrl';

export const Series = ({chartData, seriesData, mainImageId, displayWidth, displayHeight})=>{

    const [seriesImageDataUrl, setSeriesImageDataUrl] = useState(createEmptyImageDataUrl(chartData.imageWidth,chartData.imageHeight));

    return(
        <>
                
        </>
    )

}