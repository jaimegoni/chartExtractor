import { useState } from "react";
import { FileUploader } from "../components/FileUploader/FileUploader";
import { StandardView } from "../templates/StandardView/StandardView";

export const UploadFileView = ()=>{

    const [file, setFile] = useState(null);

    return(
        <StandardView>
            <>  
                <h1>Name of the chart</h1>
                <br/>
                <h1>Choose a file</h1>
                <FileUploader
                    file={file}
                    setFile={setFile}
                />
            </>
        </StandardView>
    )
}