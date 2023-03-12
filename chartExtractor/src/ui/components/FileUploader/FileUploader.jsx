import { useEffect, useState } from "react";
import "./FileUploader.css"

export const FileUploader = ({setB64image, acceptedTypes = ["image/jpeg", "image/png"]})=>{

    const inputId = "dropzoneInput";
    const canvasId = "loadImageCanvas";

    const [isDraggedOver, setIsDraggedOver] = useState(false);
    const [file, setFile] = useState(null);

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
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(droppedFile);
            document.getElementById(inputId).files = dataTransfer.files;
            setFile(droppedFile);
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
            console.log(URL.createObjectURL((event.target.files[0])));
            if(acceptedTypes.includes(event.target.files[0].type)){
                setFile(event.target.files[0]);
            }
            else{
                event.target.value = "";
            }
        }
    }

    useEffect(()=>{
        if (!(file === null)){

            const image = new Image();
            image.crossOrigin='anonymous';

            image.onload = () => {
                const cnvs = document.getElementById(canvasId);

                const ctx = cnvs.getContext('2d');

                cnvs.height = image.naturalHeight;
                cnvs.width = image.naturalWidth;
                ctx.drawImage(image, 0, 0);

                setB64image(cnvs.toDataUrl());
                console.log(cnvs.toDataUrl());
            }
            image.src = URL.createObjectURL(file);
        }
    },[file])

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
                    <p>Drag and drop files</p>
                    <p>or</p>
                    <input id={inputId} type="file" onChange={onInputChange} accept={acceptedTypesToString()}/>
                </div>
            </div>
            
            {
                !(file === null)
                    &&
                <canvas
                    id = {canvasId}
                />
            }
            {
                !(file === null)
                    &&
                <button className="btn btn-outline-danger" onClick={()=>{removeFile();}}>Remove file</button>
            }
            
        </div>
    )
}