import PropTypes from 'prop-types';

import './ModalStyles.css';


export const LargeModalDialog = ({setIsModalActive, modalTitle, children})=>{
    
    const modalBackgroundId = "modalBackgroundDiv";

    const getClickedElementId = (event)=>{
        if(event.target.id === modalBackgroundId){
            setIsModalActive(false);
        }
    }

    return(
    <div
        id={modalBackgroundId}
        onClick={getClickedElementId}
        className="modal fade show modalBackground"
        role="dialog"
        tabIndex={-1}
    >
        <div className="modal-dialog modal-lg">
            <div className="modal-content" style={{borderColor:"blue"}}>
                <div className="modal-header">
                    <h5 className="modal-tilte">{modalTitle}</h5>
                    <button type="button" className="close close__button" onClick={()=>{setIsModalActive(false)}}>
                        <span >x</span>
                    </button>
                </div>
                {
                    children
                }
            </div>
        </div>
    </div>
    );

};

LargeModalDialog.propTypes = {
    setIsModalActive : PropTypes.func.isRequired,
    modalTitle : PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}