import { getObject } from "../../infrastructure/MemoryStorage/GetObject"
import { saveObject } from "../../infrastructure/MemoryStorage/SaveObject";

export const getStoredChartsKeys = ()=>{

    const storedChartsInfoKey = "ChartExtractorMemory";

    const storedChartsInfo = getObject(storedChartsInfoKey);

    if (storedChartsInfo === null){
        const storedChartsTemplate = {
            creationDate: new Date().toDateString(),
            lastModificationDate : new Date().toDateString(),
            chartKeys : []
        }
        saveObject(storedChartsInfoKey, storedChartsTemplate);
        return [];
    }
    
    return storedChartsInfo.chartKeys;
}