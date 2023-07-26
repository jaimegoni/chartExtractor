
import './FillButtons.css';

export const DiscontinuousFillButton = ({fillMode, setFillMode})=>{

    return(
        
        <div
            className={fillMode === 'discontinuousFill' ? 'fill__button--div fill_active' : 'fill__button--div'}
            onClick={()=>{setFillMode('discontinuousFill')}}
        >
            <div className='option__image--div'>
                <img
                    src='/images/fill_discontinuous.png'
                    className='fill__icon--img'
                    onClick={()=>{setFillMode('discontinuousFill')}}
                />
            </div>
            <label  className='option--label'>Fill discontinuous line</label>
        </div>
    )
}