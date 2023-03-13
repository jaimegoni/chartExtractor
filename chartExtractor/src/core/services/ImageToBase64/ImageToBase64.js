
import PropTypes from 'prop-types'

export const imageToBase64 = ( file, setBase64 )=>{

    const reader = new FileReader();
    reader.onload = () => {
        setBase64(reader.result) ;
    }
    reader.readAsDataURL(file);
}

imageToBase64.propTypes = {
    file : PropTypes.any.isRequired,
    setBase64 : PropTypes.func.isRequired
}