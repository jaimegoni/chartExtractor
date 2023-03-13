import { getObject } from "../../infrastructure/MemoryStorage/GetObject"

import PropTypes from 'prop-types'

export const getStoredChartByKey = (chartKey)=>{

    return getObject(chartKey);

}

getStoredChartByKey.propTypes = {
    chartKey : PropTypes.string.isRequired
}