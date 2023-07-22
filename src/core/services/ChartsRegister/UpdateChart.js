
import { saveObject } from "../../infrastructure/MemoryStorage/SaveObject";

export const updateChart = (chartData)=>{
    const storedChartsInfoKey = "ChartExtractorMemory";

    saveObject(
        chartData.key,
        chartData
        );

    return;

}