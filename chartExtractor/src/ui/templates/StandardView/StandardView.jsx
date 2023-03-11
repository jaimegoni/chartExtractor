
import { NavigationBar } from "../NavigationBar/NavigationBar";

export const StandardView = ({children})=>{

    return(
        <>
            <NavigationBar/>
            <div>
                {children}
            </div>
        </>
    );
}