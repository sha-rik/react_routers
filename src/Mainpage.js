import { Outlet } from "react-router-dom";

function Mainpage() {
    return (
        <div>
            {/* agar tum chate ho ki.. parent element apne child element ko render
             hone de... to tum ye use kro ge */}
            <Outlet />
            
        </div>
    );
}

export default Mainpage;