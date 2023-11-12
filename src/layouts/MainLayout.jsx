import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
    const location = useLocation();

    const hideNavFoot = location.pathname.includes('login') || location.pathname.includes('register');

    return (
        <div>
            {hideNavFoot || <Navbar></Navbar>}
            <Outlet></Outlet>
            {hideNavFoot || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;