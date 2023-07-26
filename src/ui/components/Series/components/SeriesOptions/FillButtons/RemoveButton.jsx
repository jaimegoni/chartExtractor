
import './FillButtons.css';

export const RemoveButton = ({fillMode, setFillMode})=>{

    return(
        <div
            className={fillMode === 'remove' ? 'fill__button--div fill_active' : 'fill__button--div'}
            onClick={()=>{setFillMode('remove')}}
        >   
            <div className='option__image--div'>
                <img
                    src='/images/remove.png'
                    className='option__pencil--img'
                />
            </div>
            <label className='option--label'>Remove</label>
        </div>
    )
}