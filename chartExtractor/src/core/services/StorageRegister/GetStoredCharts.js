import { getObject } from "../../infrastructure/MemoryStorage/GetObject"
import { saveObject } from "../../infrastructure/MemoryStorage/SaveObject";

export const getStoredCharts = ()=>{

    const key = "ChartExtractorMemory"

    const storedCharts = getObject(key);

    if (storedCharts === null){
        const storedChartsTemplate = {
            creationDate: new Date().toDateString(),
            lastModificationDate : new Date().toDateString(),
            charts : []
        }
        saveObject(key, storedChartsTemplate);
        return storedChartsTemplate;
    }
    
    return storedCharts;

}