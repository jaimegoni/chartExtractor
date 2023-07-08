
import { NavigationBar } from "../NavigationBar/NavigationBar";

export const StandardView = ({children})=>{

    return(
        <>
            <NavigationBar/>
            <div style={{margin:"2em"}}>
                {children}
            </div>
        </>
    );
}