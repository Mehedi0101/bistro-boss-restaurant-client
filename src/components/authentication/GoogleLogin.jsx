import { Store } from "react-notifications-component";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const GoogleLogin = () => {

    const { googleLogin } = useContext(AuthContext);
    const { state } = useLocation();

    const loginWithGoogle = () => {
        console.log('hehe');
        googleLogin()
            .then(res => {
                const userInfo = {
                    name: res?.user?.displayName,
                    email: res?.user?.email
                }
                useAxiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res?.data?.insertedId) {
                            Store.addNotification({
                                title: "Successful",
                                message: "You have successfully signed in",
                                type: "success",
                                insert: "top",
                                container: "top-center",
                                animationIn: ["animate__animated", "animate__fadeIn"],
                                animationOut: ["animate__animated", "animate__fadeOut"],
                                dismiss: {
                                    duration: 3000,
                                    onScreen: true
                                }
                            });
                            Navigate(state || "/")
                        }
                    })
                    .catch(() => {
                        Store.addNotification({
                            title: "Failed",
                            message: "Sign in failed",
                            type: "danger",
                            insert: "top",
                            container: "top-center",
                            animationIn: ["animate__animated", "animate__fadeIn"],
                            animationOut: ["animate__animated", "animate__fadeOut"],
                            dismiss: {
                                duration: 3000,
                                onScreen: true
                            }
                        });
                    })
            });
    }

    return loginWithGoogle;
};

export default GoogleLogin;