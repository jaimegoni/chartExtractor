import { useState } from "react";
import { getStoredCharts } from "../../core/services/StorageRegister/GetStoredCharts";
import { getUniqueRandomKey } from "../../core/services/StorageRegister/GetUniqueRandomKey";
import { storeNewChart } from "../../core/services/StorageRegister/StoreNewChart";
import { FileUploader } from "../components/FileUploader/FileUploader";
import { StandardView } from "../templates/StandardView/StandardView";

export const UploadFileView = ()=>{

    const [chartName, setChartName] = useState("");
    const [chartType, setChartType] = useState("-- Choose one --");
    const [b64image, setB64image] = useState("");

    const isInformationUploaded = ()=>{
        if (!(chartName === "") && !(b64image === "") && !(chartType ==="-- Choose one --")){
            return true;
        }
        return false;
    }

    const toNextStep = ()=>{
        
        const key = getUniqueRandomKey();

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
                    setB64image={setB64image}
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