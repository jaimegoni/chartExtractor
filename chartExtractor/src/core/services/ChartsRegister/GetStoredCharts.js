import { getStoredChartsKeys } from "./GetStoredChartsKeys";
import { getObject } from "../../infrastructure/MemoryStorage/GetObject"

export const getStoredCharts = ()=>{

    const chartKeys = getStoredChartsKeys();

    if (chartKeys.length > 0){
        const storedCharts = chartKeys.map((key) =>(getObject(key)));
        return storedCharts;
    }
    
    return [];

}