import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import PuffLoader from "react-spinners/PuffLoader";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { loading, currentUser } = useContext(AuthContext);
    const { pathname } = useLocation();


    if (loading) {
        return <div className="min-h-screen flex justify-center items-center"><PuffLoader color="#EEFF25" /></div>;
    }

    if (!currentUser) {
        return <Navigate state={pathname} to="/login" />;
    }

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivateRoute;