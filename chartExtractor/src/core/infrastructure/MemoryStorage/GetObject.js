
import PropTypes from 'prop-types'

export const getObject = (key)=>{

    const stringifiedData = localStorage.getItem(key);

    return JSON.parse(stringifiedData);
}

getObject.propTypes = {
    key : PropTypes.string.isRequired
}