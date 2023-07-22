import { useEffect, useState } from 'react';

import './AxisSelector.css';

export const AxisSelector = ({isActive, setIsActive, chartData}) =>{

    return(
        <div className='axis__selector--div'>
                <label className='selector__header--label' onClick={()=>{setIsActive(!isActive)}}>{isActive ? "🔳":"🔲"} Select axis</label>
        </div>
    )

}
