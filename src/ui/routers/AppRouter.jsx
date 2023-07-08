import { Route, Routes} from "react-router-dom";
import { FaqView } from "../views/FaqView";
import { HomeView } from "../views/HomeView";
import { NoRouteView } from "../views/NoRouteView";
import { UploadFileView } from "../views/UploadFileView";
import { SelectAxisView } from "../views/SelectAxisView";



export const AppRouter = ()=>{

    return(
    <Routes>
        <Route path="/" element={<HomeView/>}/>
        <Route path="/about" element={<FaqView/>}/>
        <Route path="/faq" element={<FaqView/>}/>
        <Route path="*" element={<NoRouteView/>}/>
        <Route path="uploadImage" element={<UploadFileView/>}/>
        <Route path="selectAxis/:chartKey" element={<SelectAxisView/>}/>
    </Routes>
    );
}