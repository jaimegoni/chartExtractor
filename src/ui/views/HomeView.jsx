
import { getStoredChartByKey } from "../../core/services/ChartsRegister/GetStoredChartByKey";
import { getStoredChartsKeys } from "../../core/services/ChartsRegister/GetStoredChartsKeys";
import { ChartCard } from "../components/ChartCard/ChartCard";
import { StandardView } from "../templates/StandardView/StandardView";

export const HomeView = ()=>{

    const chartKeys = getStoredChartsKeys();

    return(
        <StandardView>
            <h1>Welcome</h1>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"stretch"}}>
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
        </StandardView>
    )
}