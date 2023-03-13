
import PropTypes from 'prop-types'

import { getObject } from "../../infrastructure/MemoryStorage/GetObject";
import { saveObject } from "../../infrastructure/MemoryStorage/SaveObject";
import { getUniqueRandomKey } from "./GetUniqueRandomKey";

export const storeNewChart = (chart)=>{

    const storedChartsInfoKey = "ChartExtractorMemory";
    const newChartKey = getUniqueRandomKey();

    let storedCharts = getObject(storedChartsInfoKey);
    
    const updatedChartKeys = [...storedCharts.chartKeys, newChartKey]

    saveObject(
        storedChartsInfoKey,
        {
            ...storedCharts,
            lastModificationDate : new Date().toDateString(),
            chartKeys : updatedChartKeys
        }
    );

    saveObject(
        newChartKey,
        chart
        );

    return;

}

storeNewChart.propTypes = {
    chart : PropTypes.object.isRequired
}
