
import './FillButtons.css';

export const PointButton = ({fillMode, setFillMode})=>{

    return(
        <div
            className={fillMode === 'point' ? 'fill__button--div fill_active' : 'fill__button--div'}
            onClick={()=>{setFillMode('point')}}
        >   
            <div className='option__image--div'>
                <img
                    src='/images/pencil.png'
                    className='option__pencil--img'
                />
            </div>
            <label className='option--label'>Select point</label>
        </div>
    )
}