import { useState } from "react";
import { FileUploader } from "../components/FileUploader/FileUploader";
import { StandardView } from "../templates/StandardView/StandardView";

export const UploadFileView = ()=>{

    const [chartName, setChartName] = useState("");
    const [file, setFile] = useState(null);

    const isInformationUploaded = ()=>{
        if (!(chartName === "") && !(file === null)){
            return true;
        }
        return false;
    }

    return(
        <StandardView>
            <>  
                <h1>1) Name of the chart</h1>
                <br/>
                <input type="text" placeholder="Chart name" onChange={(event) => {setChartName(event.target.value);}}/>
                <br/><br/>
                <h1>2) Choose a file</h1>
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
                        <h1>3) Continue</h1>
                        <br/>
                        <button className="btn btn-primary">Next</button>
                    </>
                    
                }

            </>
        </StandardView>
    )
}