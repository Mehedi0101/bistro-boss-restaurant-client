import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const { logoutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    axiosSecure.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
        return config;
    }, error => {
        Promise.reject(error);
    })

    axiosSecure.interceptors.response.use( response => {
        return response;
    }, error => {
        const status = error.response.status;
        console.log(status);
        if( status === 401 || status === 403 ){
            logoutUser();
            navigate('/login');
        }
    })
    return axiosSecure;
};

export default useAxiosSecure;