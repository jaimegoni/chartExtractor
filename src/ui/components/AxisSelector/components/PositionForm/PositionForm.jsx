
import { useState } from 'react';

import './PositionForm.css';

import { NoteDiv } from '../NoteDiv/NoteDiv';

export const PositionForm = ({xPosition, yPosition, xRealCoordinate, yRealCoordinate, setFormActive, onSaveForm, onDeleteForm = undefined})=>{

    const [xCoordinate, setXCoordinate] = useState(xRealCoordinate);
    const [yCoordinate, setYCoordinate] = useState(yRealCoordinate);

    return(
        <NoteDiv
            xPosition={xPosition}
            yPosition={yPosition}
        >
            <label>Axis coordinates:</label>
            <div className='coord__input--div'><label>X - value: </label><input type='number' className='coord_input--input' value={xCoordinate} onChange={(e)=>{setXCoordinate(Number(e.target.value))}}/></div>
            <div className='coord__input--div'><label>Y - value: </label><input type='number' className='coord_input--input' value={yCoordinate} onChange={(e)=>{setYCoordinate(Number(e.target.value))}}/></div>
            <div className="note__actions--div">
                <button type="button" className="btn btn-warning" style={{marginRight:"0.25em"}} onClick={()=>{setFormActive(false)}}>Close</button>
                {
                    !(onDeleteForm === undefined)
                        &&
                    <button type="button" className="btn btn-danger" onClick={()=>{onDeleteForm()}}>Delete</button>
                }
                <button type="button" className="btn btn-success" onClick={()=>{onSaveForm(xCoordinate, yCoordinate)}}>Save</button>
            </div>
        </NoteDiv>
    )
}