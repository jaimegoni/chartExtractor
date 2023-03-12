
import { getObject } from "../../infrastructure/MemoryStorage/GetObject";
import { saveObject } from "../../infrastructure/MemoryStorage/SaveObject";

export const storeNewChart = (chart)=>{

    const key = "ChartExtractorMemory"

    let storedCharts = getObject(key);
    const updatedCharts = [...storedCharts.charts, chart] 

    storedCharts = {
        ...storedCharts,
        lastModificationDate : new Date().toDateString(),
        charts : updatedCharts
    }
    saveObject(key, storedCharts);

}