import { useEffect, useState } from 'react';

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
                {
                    chartData.selectedAxis.length === 0
                        &&
                    <label className='empty__warning--label'>No axis registered</label>
                }
                </div>
            }

        </div>
    )

}
