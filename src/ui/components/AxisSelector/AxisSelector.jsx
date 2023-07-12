import { useState } from 'react';

import './AxisSelector.css';

export const AxisSelector = ({isActive, setIsActive, chartData}) =>{

    return(
        <div className='axis__selector--div'>
            <div className='selector__header--div'>
                <label className='selector__header--label' onClick={()=>{setIsActive(!isActive)}}>{isActive ? "🔳":"🔲"} Axis selection</label>
            </div>
            {
                isActive
                    &&
                <div className='selector__pool--div'>

                </div>
            }

        </div>
    )

}
