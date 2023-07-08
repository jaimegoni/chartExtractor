
import PropTypes from 'prop-types'

import { getObject } from '../../infrastructure/MemoryStorage/GetObject';
import { saveObject } from '../../infrastructure/MemoryStorage/SaveObject';

export const deleteChartByKey = (chartKey) =>{

    const storedChartsInfoKey = "ChartExtractorMemory";

    const storedChartsInfo = getObject(storedChartsInfoKey);

    localStorage.removeItem(chartKey);

    const chartKeys = storedChartsInfo.chartKeys.filter(key => key !== chartKey);

    saveObject(
            storedChartsInfoKey,
            {
                ...storedChartsInfo,
                lastModificationDate : new Date().toDateString(),
                chartKeys
            }
        );
    
    return;
}

deleteChartByKey.propTypes = {
    chartKey : PropTypes.string.isRequired
}