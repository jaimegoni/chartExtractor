
import PropTypes from 'prop-types'

export const deleteChartByKey = (chartKey) =>{

    const storedChartsInfoKey = "ChartExtractorMemory";

    const storedChartsInfo = getObject(storedChartsInfoKey);

    localStorage.removeItem(chartKey);

    const chartKeys = storedChartsInfo.chartKeys

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