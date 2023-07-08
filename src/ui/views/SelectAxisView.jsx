import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { StandardView } from "../templates/StandardView/StandardView";
import { getStoredChartByKey } from "../../core/services/ChartsRegister/GetStoredChartByKey";

export const SelectAxisView = ()=>{

    const { chartKey } = useParams();

    const chartData = getStoredChartByKey(chartKey);

    useEffect(() => {
      console.log({ chartKey });
    }, [chartKey]);

    return(
        <StandardView>
            <h1>Params: {chartData.chartName}</h1>
            <img src={chartData.b64image} alt="chartImage"/>
        </StandardView>
    )
}