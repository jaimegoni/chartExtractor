
import PropTypes from 'prop-types';

import './NoteDiv.css';

export const NoteDiv = ({xPosition, yPosition, children})=>{

    return(
        <div
            className="creation__note--div"
            style={
                {
                    left: `${xPosition + 4}px`,
                    top: `${yPosition}px`
                }
            }
        >
            {children}
        </div>
    )
}

NoteDiv.propTypes = {
    xPosition : PropTypes.number.isRequired,
    yPosition : PropTypes.number.isRequired,
    children : PropTypes.any
}