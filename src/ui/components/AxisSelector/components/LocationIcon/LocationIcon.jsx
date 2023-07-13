
import './LocationIcon.css';

export const LocationIcon = ({xPosition, yPosition, isActive, setActive})=>{

    return(
        <img
            src='/images/AxisLocationIcon.png'
            className={ isActive ? 'location__icon--img active__icon' : 'location__icon--img'}
            style={{
                left: `${xPosition}px`,
                top: `${yPosition}px`,
            }}
            onClick={()=>{setActive(!isActive)}}
        />
    )
}