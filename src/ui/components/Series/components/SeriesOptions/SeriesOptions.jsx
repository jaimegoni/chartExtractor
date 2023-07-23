
import './SeriesOptions.css';

export const SeriesOptions = ({seriesData, isActive, setIsActive, isVisible, setIsVisible, fillColor, setFillColor, fillMode, setFillMode})=>{

    return(
        <div className='series__options--div'>
            <div
                className='seriesOptions__header--div'
                style={
                    {
                        backgroundColor : fillColor
                    }
                }
            >
                <label className='selector__header--label' onClick={()=>{setIsActive(!isActive)}}>{isActive ? "🔳":"🔲"}</label>
                <img src={isVisible ? "./images/VisibleIcon.png":"./images/NonVisibleIcon.png"} onClick={()=>{setIsVisible(!isActive)}}/>
                <label className='selector__header--label' >{seriesData.name}</label>
            </div>
            {
                isActive
                    &&
                <div className='seriesOptions__options--div'>
                    <div className='seriesOptions__fillMode--div'>
                        <img
                            src='./images/pencil.png'
                            className={fillMode === 'point' ? 'option__action--icon active__icon' : 'option__action--icon'}
                            onClick={()=>{setFillMode('point')}}
                        />
                        <img
                            src='./images/fill.png'
                            className={fillMode === 'fill' ? 'option__action--icon active__icon' : 'option__action--icon'}
                            onClick={()=>{setFillMode('fill')}}
                        />
                    </div>
                    <div className='seriesOptions__fillMode--div'>
                        <input type='color' value={fillColor} onChange={(event)=>{setFillColor(event.target.value)}}/>
                        <label>Fill series color</label>
                    </div>
                </div>
            }
            
        </div>
    )
}