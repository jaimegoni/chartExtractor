
import PropTypes from 'prop-types'

import './ModalStyles.css';

export const ModalBody = ({children})=>{

    return(
        <div className="modal-body modal__body--div">
            {children}
        </div>
    )
}

ModalBody.propTypes = {
    children : PropTypes.element.isRequired
}