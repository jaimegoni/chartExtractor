
import { useState } from "react";
import { useNavigate } from "react-router-dom";


import { getStoredChartByKey } from "../../../core/services/ChartsRegister/GetStoredChartByKey";
import { getStoredChartsKeys } from "../../../core/services/ChartsRegister/GetStoredChartsKeys";
import { deleteStoredCharts } from "../../../core/services/ChartsRegister/DeleteStoredCharts";
import { ChartCard } from "../../components/ChartCard/ChartCard";
import { StandardView } from "../../templates/StandardView/StandardView";
import { UploadChartModal } from "../../components/UploadChartModal/UploadChartModal";

export const HomeView = ()=>{

    const chartKeys = getStoredChartsKeys();

    const [uploadImageModalActive, setUploadImageModalActive] = useState(false);
    const navigate = useNavigate();
    
    const deleteAllCharts = ()=>{

        if (confirm("Are you sure you want to delete all stored charts?")){
            deleteStoredCharts();
            navigate(0);
        }
    }

    return(
        <StandardView>
            <h1>Welcome</h1>
            <div className="pool__actions--div">
                <button className="btn btn-outline-primary" onClick={()=>{setUploadImageModalActive(!uploadImageModalActive)}}>Add new chart</button>
            </div>
            <div className="images__pool--div">
                {
                    chartKeys.length > 0
                            &&
                    chartKeys.map(
                        (key)=>{
                            return(
                                <ChartCard
                                    key={key}
                                    chartInfo={getStoredChartByKey(key)}
                                />
                            );
                        }
                    )
                }
            </div>
            {
                uploadImageModalActive
                    &&
                <UploadChartModal
                    setIsModalActive = {setUploadImageModalActive}
                />
            }
        </StandardView>
    )
}