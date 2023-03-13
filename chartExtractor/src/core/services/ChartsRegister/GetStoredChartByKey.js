import { getObject } from "../../infrastructure/MemoryStorage/GetObject"

export const getStoredChartByKey = (chartKey)=>{

    return getObject(chartKey);

}