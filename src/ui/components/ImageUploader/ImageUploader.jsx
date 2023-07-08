import { useState } from "react";
import PropTypes from 'prop-types'

import "./ImageUploader.css"

export const ImageUploader = ({file, setFile, acceptedTypes = ["image/jpeg", "image/png"]})=>{

    const inputId = "dropzoneInput"

    const [isDraggedOver, setIsDraggedOver] = useState(false)
    const [fileUploadError, setFileUploadError] = useState("");

    const handleFileDrop = (event) =>{

        event.preventDefault();

        setIsDraggedOver(false);

        let droppedFile = null;

        if (event.dataTransfer.items){

            const droppedItem = [...event.dataTransfer.items][0];
            if (droppedItem.kind === "file") {
                droppedFile = droppedItem.getAsFile();
              }
            
        }
        else{
            droppedFile = [...event.dataTransfer.files][0];
        }

        if(acceptedTypes.includes(droppedFile.type)){
            if  (droppedFile.size < 1048576){
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(droppedFile);
                document.getElementById(inputId).files = dataTransfer.files;
                setFile(droppedFile);
                setFileUploadError("");
            }
            else{
                setFileUploadError("Error: file size is bigger than 1 MB. Please, reduce the size of the file.");
            }

        }
        else{
            setFileUploadError("Error: File type not accepted.");
        }

    }

    const handleOnDragOver = (event)=>{
        event.preventDefault();
        setIsDraggedOver(true);
    }

    const handleOnDragLeave = ()=>{
        setIsDraggedOver(false);
    }

    const removeFile = ()=>{
        document.getElementById(inputId).value = "";
        setFile(null);
    }

    const acceptedTypesToString = ()=>{
        let stringAcceptedTypes = "";
        acceptedTypes.forEach((type) =>{stringAcceptedTypes += type + ", "})
        return stringAcceptedTypes;
    }

    const onInputChange = (event)=>{
        if (event.target.files[0]){
            if(acceptedTypes.includes(event.target.files[0].type)){

                if  (event.target.files[0].size < 1048576){
                    setFile(event.target.files[0]);
                    setFileUploadError("");
                }
                else{
                    setFileUploadError("Error: file size is bigger than 1 MB. Please, reduce the size of the file.");
                }
            }
            else{
                event.target.value = "";
                setFileUploadError("Error: File type not accepted.");
            }
        }
    }

    return(
        <div className="file__uploader--div">
            <div
                id="drop_zone"
                className={ isDraggedOver ? "drop_zone--div dragged__over--div" : "drop_zone--div"}
                onDrop={handleFileDrop}
                onDragOver={handleOnDragOver}
                onDragLeave={handleOnDragLeave}
            >
                <div className="dropzone__components--div">
                    <p>Drag and drop image</p>
                    <p>or</p>
                    <input id={inputId} type="file" onChange={onInputChange} accept={acceptedTypesToString()}/>
                    <p style={{fontSize:"0.75em"}}>Max size: 1 MB</p>
                </div>
            </div>
            <div>
                {
                    !(fileUploadError === "")
                        &&
                    <p style={{color:"red"}}>{fileUploadError}</p>
                }
            </div>
            {
                !(file === null)
                    &&
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>
                    <img
                        src={URL.createObjectURL(file)}
                        alt="uploadedImage"
                        style={{maxWidth : "30%", marginBottom : "1em", border:"1px solid blue"}}
                    />
                    <button className="btn btn-outline-danger" onClick={()=>{removeFile();}}>Remove image</button>
                </div>
            }
            
        </div>
    )
}

ImageUploader.propTypes = {
    file : PropTypes.any,
    setFile : PropTypes.func.isRequired,
    acceptedTypes : PropTypes.array
}