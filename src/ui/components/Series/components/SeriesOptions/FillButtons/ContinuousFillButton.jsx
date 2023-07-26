
import './FillButtons.css';

export const ContinuousFillButton = ({fillMode, setFillMode})=>{

    return(
        
        <div
            className={fillMode === 'continuousFill' ? 'fill__button--div fill_active' : 'fill__button--div'}
            onClick={()=>{setFillMode('continuousFill')}}
        >
            <div className='option__image--div'>
                <img
                    src='/images/fill_continuous.png'
                    className='fill__icon--img'
                    onClick={()=>{setFillMode('continuousFill')}}
                />
            </div>
            <label  className='option--label'>Fill continuous line</label>
        </div>
    )
}