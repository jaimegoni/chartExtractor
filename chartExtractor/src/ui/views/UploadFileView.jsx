
import { useState } from "react";

import { getStoredCharts } from "../../core/services/StorageRegister/GetStoredCharts";
import { getUniqueRandomKey } from "../../core/services/StorageRegister/GetUniqueRandomKey";
import { storeNewChart } from "../../core/services/StorageRegister/StoreNewChart";
import { imageToBase64 } from "../../core/services/ImageToBase64/ImageToBase64";

import { FileUploader } from "../components/FileUploader/FileUploader";
import { StandardView } from "../templates/StandardView/StandardView";

export const UploadFileView = ()=>{

    const [chartName, setChartName] = useState("");
    const [chartType, setChartType] = useState("-- Choose one --");
    const [file, setFile] = useState(null);

    const isInformationUploaded = ()=>{
        if (!(chartName === "") && !(file === null) && !(chartType ==="-- Choose one --")){
            return true;
        }
        return false;
    }

    const toNextStep = ()=>{
        const b64img = imageToBase64(file);
        console.log(b64img);
        const key = getUniqueRandomKey();
        const b64image = URL.createObjectURL(file);

        const chartInfo = {
            chartName,
            key,
            chartType,
            b64image
        }
        console.log(chartInfo);
        storeNewChart(chartInfo);
        console.log(getStoredCharts());

    }

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