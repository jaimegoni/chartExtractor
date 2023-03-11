
import "./ChartLink.css"

import PropTypes from "prop-types"


export const ChartLink = ({imageSource, linkLabel, linkHref})=>{

    return(
        <a className="chart__link--a" href={linkHref}>
            <img src={imageSource} alt="line_chart" className="chart__link--img"/>
            <p className="chart__link--p">{linkLabel}</p>
        </a>
    )
}

ChartLink.propTypes = {
    imageSource : PropTypes.string.isRequired,
    linkLabel : PropTypes.string.isRequired,
    linkHref : PropTypes.string.isRequired
}