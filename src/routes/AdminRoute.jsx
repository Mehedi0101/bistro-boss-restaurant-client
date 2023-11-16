import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const { loading, currentUser } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const { pathname } = useLocation();


    if (loading || isAdminLoading) {
        return <div className="min-h-screen flex justify-center items-center"><PuffLoader color="#EEFF25" /></div>;
    }

    if (currentUser && isAdmin) {
        return children;
    }

    return <Navigate state={pathname} to="/login" />;
};

AdminRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default AdminRoute;