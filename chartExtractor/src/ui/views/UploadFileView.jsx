
import { useState, useEffect } from "react";

import { storeNewChart } from "../../core/services/StorageRegister/StoreNewChart";
import { imageToBase64 } from "../../core/services/ImageToBase64/ImageToBase64";

import { FileUploader } from "../components/FileUploader/FileUploader";
import { StandardView } from "../templates/StandardView/StandardView";

export const UploadFileView = ()=>{

    const [chartName, setChartName] = useState("");
    const [chartType, setChartType] = useState("-- Choose one --");
    const [file, setFile] = useState(null);
    const [b64image, setB64image] = useState("");

    const [chartInfo, setChartInfo] = useState ({});

    const isInformationUploaded = ()=>{
        if (!(chartName === "") && !(file === null) && !(chartType ==="-- Choose one --") && !(b64image==="")){
            return true;
        }
        return false;
    }

    const toNextStep = ()=>{
        console.log(chartInfo);
        storeNewChart(chartInfo);
    }

    useEffect(
        () =>{
            if(!(file === null)){
                imageToBase64(file, setB64image);
            }
        }
        , [file]);
    
    useEffect(()=>{

            if (isInformationUploaded()){
                setChartInfo({
                    chartName,
                    chartType,
                    b64image
                });
            }
            else{
                setChartInfo({})
            }
        }
        ,[chartName, chartType, b64image]);
    
    return(
        <StandardView>
            <>  
                <h1>1) Name of the chart</h1>
                <br/>
                <input type="text" placeholder="Chart name" onChange={(event) => {setChartName(event.target.value);}} style={{minWidth : "30%"}}/>
                <br/><br/>
                <h1>2) Type of chart</h1>
                <br/>
                <select  style={{minWidth : "30%"}} onChange={(event) =>{setChartType(event.target.value)}}>
                    <option> -- Choose one --</option>
                    <option>Line chart</option>
                </select>
                <br/><br/>
                <h1>3) Choose a file</h1>
                <br/>
                <FileUploader
                    file={file}
                    setFile={setFile}
                />
                <br/><br/>
                {
                    isInformationUploaded()
                        &&
                    <>
                        <h1>4) Continue</h1>
                        <br/>
                        <button className="btn btn-primary" onClick={()=>{toNextStep()}}>Continue</button>
                    </>
                    
                }

            </>
        </StandardView>
    )
}