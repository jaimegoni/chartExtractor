import { Route, Routes} from "react-router-dom";
import { FaqView } from "../views/FaqView";
import { HomeView } from "../views/HomeView/HomeView";
import { NoRouteView } from "../views/NoRouteView";
import { SelectAxisView } from "../views/SelectAxisView";



export const AppRouter = ()=>{

    return(
    <Routes>
        <Route path="/" element={<HomeView/>}/>
        <Route path="/usage" element={<FaqView/>}/>
        <Route path="/faq" element={<FaqView/>}/>
        <Route path="*" element={<NoRouteView/>}/>
        <Route path="workspace/:chartKey" element={<SelectAxisView/>}/>
    </Routes>
    );
}