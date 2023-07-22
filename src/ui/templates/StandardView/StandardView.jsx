
import { NavigationBar } from "../NavigationBar/NavigationBar";

import './StandardView.css';

export const StandardView = ({children})=>{

    return(
        <>
            <NavigationBar/>
            <div className="page__content--div">
                {children}
            </div>
        </>
    );
}