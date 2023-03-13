import { getStoredChartsKeys } from "./GetStoredChartsKeys"

export const deleteStoredCharts = ()=>{
    
    const storedChartsInfoKey = "ChartExtractorMemory";

    const storedChartsInfo = getObject(storedChartsInfoKey);

    const storedChartKeys = getStoredChartsKeys();

    storedChartKeys.forEach((chartKey) => {
        localStorage.removeItem(chartKey);
    });

    saveObject(
            storedChartsInfoKey,
            {
                ...storedChartsInfo,
                lastModificationDate : new Date().toDateString(),
                chartKeys: []
            }
        );
    return;
}