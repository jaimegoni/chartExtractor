
import { useEffect } from 'react';
import './NewSeriesForm.css';

export const NewSeriesForm = ()=>{
    return(
        <div className='newSeries__form--div'>
            <input type='text' className='newSeries__name--input' placeholder='Series name'/>
            <button type='button' className='btn btn-outline-success' > Add new series</button>
        </div>
    )
}