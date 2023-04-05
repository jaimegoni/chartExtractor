import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { StandardView } from "../templates/StandardView/StandardView";

export const SelectAxisView = ()=>{
    const { chartKey } = useParams();

    useEffect(() => {
      console.log({ chartKey });
    }, [chartKey]);
    return(
        <StandardView>
            <h1>Params: {chartKey}</h1>
        </StandardView>
    )
}