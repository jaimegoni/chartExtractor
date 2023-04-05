
import { deleteChartByKey } from "../../../core/services/ChartsRegister/DeleteChartByKey"
import "./ChartCard.css"

export const ChartCard = ({chartInfo})=>{

    const onDeleteChart = ()=>{
        if (confirm(`Are you sure to delete the chart ${chartInfo.chartName}?`)){
            deleteChartByKey(chartInfo.key);
            window.location.reload(false);
        }
    }

    return(
        <div className="chart__card--div">
            <button onClick={onDeleteChart} className="chart__card--del">🗑</button>
            <a
                href={`/${chartInfo.status}/${chartInfo.key}`}
                className="chart__card--a"
            >
                <p style={{margin:"3px"}}>{chartInfo.chartName}</p>
                <img src={chartInfo.b64image} alt={`img_${chartInfo.chartName}`} className="chart__card--img"/>
            </a>
        </div>
    )
}