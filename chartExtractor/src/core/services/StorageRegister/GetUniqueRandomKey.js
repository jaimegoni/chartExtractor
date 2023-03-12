
import { getRandomKey } from "../RandomKey/GetRandomKey";
import {getStoredCharts} from "./GetStoredCharts"

export const getUniqueRandomKey = ()=>{
    const {charts} = getStoredCharts();

    if (charts.length > 0){
        const existingKeys = charts.map((chart) =>(chart.key));

        let key = getRandomKey();

        while (existingKeys.includes(key)){
            key = getRandomKey();
        }
        return key;
    }
    else{
        return getRandomKey();
    }

}