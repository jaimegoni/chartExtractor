
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PropTypes } from 'prop-types';

import './UploadChartModal.css';

import { storeNewChart } from "../../../core/services/ChartsRegister/StoreNewChart";
import { imageToBase64 } from "../../../core/services/ImageToBase64/ImageToBase64";
import { extractOriginalImageSize } from "../../../core/services/ExtractOriginalImageSize/ExtractOriginalImageSize";

import { ImageUploader } from "../ImageUploader/ImageUploader";
import { LargeModalDialog } from "../Modal/LargeModalDialog";
import { ModalBody } from "../Modal/ModalBody";
import { ModalFooter } from "../Modal/ModalFooter";

export const UploadChartModal = ({setIsModalActive})=>{

    const textInputId = "chartNameInput";
    const defaultChartType = "-- Choose one --";

    const [chartName, setChartName] = useState("");
    const [chartType, setChartType] = useState("-- Choose one --");
    const [file, setFile] = useState(null);
    const [b64image, setB64image] = useState("");
    const [{imageWidth, imageHeight}, setImageDimensions] = useState({imageWidth:0, imageHeight:0});

    const [chartInfo, setChartInfo] = useState ({});

    const navigate = useNavigate();

    const isInformationUploaded = ()=>{
        if (!(chartName === "") && !(file === null) && !(b64image==="") && !(imageWidth===0) && !(imageHeight===0) && !(chartType===defaultChartType) ){
            return true;
        }
        return false;
    }

    const toNextStep = ()=>{
        const imageKey = storeNewChart(chartInfo);
        navigate("/chartExtractor/"+imageKey);
    }

    const onSelectChartType = (event)=>{
        setChartType(event.target.value)
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

                setChartInfo({
                    chartName,
                    b64image,
                    imageWidth,
                    imageHeight,
                    chartType,
                    selectedAxis: [],
                    selectedSeries: []
                });
            }
            else{
                setChartInfo({});
            }
        }
        ,[chartName, imageWidth, imageHeight]);
    
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
                        <h2> Name of the chart</h2>
                        <br/>
                        <input id={textInputId} type="text" placeholder="Chart name" onChange={(event) => {setChartName(event.target.value);}} style={{minWidth : "30%"}}/>
                        <br/>
                        <h2> Chart type</h2>
                        <select className="chart__type--select" onChange={onSelectChartType}>
                            <option value={defaultChartType}>{defaultChartType}</option>
                            <option value={"lineChart"}>Line chart</option>
                        </select>
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

UploadChartModal.propTypes = {
    setIsModalActive : PropTypes.func.isRequired,
}