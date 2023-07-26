
import { ContinuousFillButton } from './FillButtons/ContinuousFillButton';
import { DiscontinuousFillButton } from './FillButtons/DiscontinuousFillButton';
import { PointButton } from './FillButtons/PointButton';
import { RemoveButton } from './FillButtons/RemoveButton';
import './SeriesOptions.css';

export const SeriesOptions = ({seriesName, isActive, setIsActive, isVisible, setIsVisible, fillColor, setFillColor, fillMode, setFillMode})=>{

    return(
        <div className='series__options--div'>
            <div
                className='seriesOptions__header--div'
            >
                <label
                    className='selector__header--label'
                    title="Select series"
                    onClick={()=>{setIsActive(!isActive)}}>{isActive ? "🔵":"⚪"}
                </label>
                <img
                    src={isVisible ? "/images/VisibleIcon.png":"/images/NonVisibleIcon.png"}
                    title={isVisible ? "Hide series":"Show series"}
                    className='option__action--img'
                    style={{
                        marginLeft: "0.5em"
                    }}
                    onClick={()=>{setIsVisible(!isVisible)}}
                />
                <input
                    type='color'
                    title='Choose fill color'
                    className='seriesOptions__color--input'
                    style={{
                        marginLeft: "0.5em"
                    }}
                    value={fillColor}
                    onChange={(event)=>{setFillColor(event.target.value)}}
                />
                <label
                    className='seriesOptions__header--label'
                >{seriesName}</label>
            </div>
            {
                isActive
                    &&
                <div className='seriesOptions__options--div'>
                    <div className='seriesOptions__fillMode--div'>
                        <PointButton
                            fillMode = {fillMode}
                            setFillMode={setFillMode}
                        />
                        <RemoveButton
                            fillMode = {fillMode}
                            setFillMode={setFillMode}
                        />
                        <ContinuousFillButton
                            fillMode = {fillMode}
                            setFillMode={setFillMode}
                        />
                        <DiscontinuousFillButton
                            fillMode = {fillMode}
                            setFillMode={setFillMode}
                        />
                    </div>
                </div>
            }
            
        </div>
    )
}