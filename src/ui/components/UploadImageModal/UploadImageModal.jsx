
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {PropTypes} from 'prop-types';

import { storeNewImage } from "../../../core/services/ImagesRegister/StoreNewImage";
import { imageToBase64 } from "../../../core/services/ImageToBase64/ImageToBase64";
import { extractOriginalImageSize } from "../../../core/services/ExtractOriginalImageSize/ExtractOriginalImageSize";

import { ImageUploader } from "../ImageUploader/ImageUploader";
import { LargeModalDialog } from "../Modal/LargeModalDialog";
import { ModalBody } from "../Modal/ModalBody";
import { ModalFooter } from "../Modal/ModalFooter";

export const UploadImageModal = ({setIsModalActive})=>{

    const textInputId = "imageNameInput";

    const [imageName, setImageName] = useState("");
    const [file, setFile] = useState(null);
    const [b64image, setB64image] = useState("");
    const [{imageWidth, imageHeight}, setImageDimensions] = useState({imageWidth:0, imageHeight:0});

    const [imageInfo, setImageInfo] = useState ({});

    const navigate = useNavigate();

    const isInformationUploaded = ()=>{
        if (!(imageName === "") && !(file === null) && !(b64image==="") && !(imageWidth===0) && !(imageHeight===0)){
            return true;
        }
        return false;
    }

    const toNextStep = ()=>{
        const imageKey = storeNewImage(imageInfo);
        navigate("/smart-image/smartImageConfiguration/"+imageKey);
    }

    useEffect(
        () =>{
            if(!(file === null)){
                imageToBase64(file, setB64image);
            }
        }
    ,[file]);

    useEffect(()=>{

        if (!(b64image === "")){
            extractOriginalImageSize(b64image).then((imageDimensions)=>{
                setImageDimensions(imageDimensions);
            })
        }

    },[b64image])

    useEffect(()=>{

            if (isInformationUploaded()){

                setImageInfo({
                    imageName,
                    b64image,
                    imageWidth,
                    imageHeight,
                    imageNotes : []
                });
            }
            else{
                setImageInfo({});
            }
        }
        ,[imageName, imageWidth, imageHeight]);
    
    useEffect(()=>{
        document.getElementById(textInputId).focus();
    }
    ,[])

    return(
        <LargeModalDialog
            setIsModalActive={setIsModalActive}
            modalTitle="Upload image"
        >
            <>
                <ModalBody>
                    <>
                        <h2> Name of the image</h2>
                        <br/>
                        <input id={textInputId} type="text" placeholder="Image name" onChange={(event) => {setImageName(event.target.value);}} style={{minWidth : "30%"}}/>
                        <br/><br/>
                        <h2> Choose an image</h2>
                        <br/>
                        <ImageUploader
                            file={file}
                            setFile={setFile}
                        />
                    </>
                </ModalBody>
                <ModalFooter
                    setIsModalActive={setIsModalActive}
                >
                    <>
                        {
                            isInformationUploaded()
                                &&
                            <button className="btn btn-primary" onClick={()=>{toNextStep()}}>Continue</button>
                        }
                    </>
                </ModalFooter>
            </>
        </LargeModalDialog>
    )
}

UploadImageModal.propTypes = {
    setIsModalActive : PropTypes.func.isRequired,
}