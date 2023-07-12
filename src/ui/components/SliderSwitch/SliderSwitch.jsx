
import PropTypes from 'prop-types';

import './SliderSwitch.css';

export const SliderSwitch = ({active, setActive})=>{

    return(
        <label className="switch">
            <input type="checkbox" checked={active} onChange={()=>{setActive(!active)}}/>
            <span className="slider round"></span>
        </label>
    )
}

SliderSwitch.propTypes = {
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired
}