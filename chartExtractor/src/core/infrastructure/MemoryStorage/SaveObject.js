
import PropTypes from 'prop-types'

export const saveObject = (key, object)=>{
    localStorage.setItem(key, JSON.stringify(object));

    return;
}

saveObject.propTypes = {
    key : PropTypes.string.isRequired,
    object : PropTypes.object.isRequired
}