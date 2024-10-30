import { Outlet } from "react-router-dom";

function Home() {
    return (
        <div>
            {/* agar tum chate ho ki.. parent element apne child element ko render
             hone de... to tum ye use kro ge */}
            <Outlet />
            <h1>Home page</h1>
        </div>
    );
}

export default Home;