import PropTypes from 'prop-types';

import './ModalStyles.css'

export const ModalFooter = ({setIsModalActive, children})=>{

    return(
        <div className="modal-footer">
        <button type="button" className="btn btn-secondary"  onClick={()=>{setIsModalActive(false)}}>Close</button>
        {
            children
        }
    </div>
    );
}

ModalFooter.propTypes = {
    setIsModalActive: PropTypes.func.isRequired,
    children: PropTypes.element
}