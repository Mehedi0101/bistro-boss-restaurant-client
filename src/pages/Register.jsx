import { Link, useLocation, useNavigate } from "react-router-dom";
import authBg from "../assets/authentication/authentication.png";
import authImg from "../assets/authentication/authentication2.png";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Store } from "react-notifications-component";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Register = () => {
    const { createUser, updateUser, logoutUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const { state } = useLocation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {

        createUser(data.email, data.password)
            .then(() => {
                updateUser(data.name, data.photo)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }

                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res?.data?.insertedId) {
                                    Store.addNotification({
                                        title: "Successful",
                                        message: "You have successfully signed up",
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
                                    logoutUser();
                                    navigate('/login');
                                }
                            })
                    })
                    .catch((err) => {
                        console.log(err);
                    })

            })
            .catch(() => {
                Store.addNotification({
                    title: "Failed",
                    message: "Sign up failed",
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
    }

    const continueWithGoogle = () => {
        googleLogin()
            .then(res => {
                const userInfo = {
                    name: res?.user?.displayName,
                    email: res?.user?.email
                }
                axiosPublic.post('/users', userInfo)
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
                            navigate(state || "/")
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

    return (
        <div className="min-h-screen lg:p-20" style={{ backgroundImage: `url(${authBg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="max-w-screen-2xl mx-auto shadow-xl border-2 border-[#0000001f] shadow-[#00000040] flex md:flex-row-reverse flex-col justify-center items-center">
                <div className="md:w-1/2">
                    <img className="p-5 xl:p-10" src={authImg} alt="" />
                </div>

                <div className="md:w-1/2 w-full px-10 xl:px-20 py-10">
                    <h2 className="text-[#151515] lg:text-3xl text-2xl text-center font-bold mb-4">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-5">
                            <label htmlFor="name" className="text-[#444] font-semibold ml-1">Name</label><br />
                            <input {...register("name", { required: true })} className="mt-3 w-full outline-none p-4 border border-[#D0D0D0] rounded-lg" type="text" name="name" id="name" placeholder="Type here" />
                            <br />
                            {errors.name && <span className="text-red-600 text-sm ml-2">* This field is required</span>}
                        </div>

                        <div className="mb-5">
                            <label htmlFor="photo" className="text-[#444] font-semibold ml-1">Photo URL</label><br />
                            <input {...register("photo", { required: true })} className="mt-3 w-full outline-none p-4 border border-[#D0D0D0] rounded-lg" type="text" name="photo" id="photo" placeholder="Enter your image link" />
                            <br />
                            {errors.photo && <span className="text-red-600 text-sm ml-2">* This field is required</span>}
                        </div>

                        <div className="mb-5">
                            <label htmlFor="email" className="text-[#444] font-semibold ml-1">Email</label><br />
                            <input {...register("email", { required: true })} className="mt-3 w-full outline-none p-4 border border-[#D0D0D0] rounded-lg" type="email" name="email" id="email" placeholder="Type here" />
                            <br />
                            {errors.email && <span className="text-red-600 text-sm ml-2">* This field is required</span>}
                        </div>


                        <div className="mb-5">
                            <label htmlFor="password" className="text-[#444] font-semibold ml-1">Password</label><br />
                            <input {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-=_+{};:'",.<>?/|\\[\]`~]).{8,}$/
                            })} className="mt-3 w-full outline-none p-4 border border-[#D0D0D0] rounded-lg" type="password" name="password" id="password" placeholder="Enter your password" />
                            <br />
                            {errors.password?.type === "required" && <span className="text-red-600 text-sm ml-2">* This field is required</span>}
                            {errors.password?.type === "minLength" && <span className="text-red-600 text-sm ml-2">* Password should contain at least 6 characters</span>}
                            {errors.password?.type === "pattern" && <span className="text-red-600 text-sm ml-2">* Password should contain at least one uppercase, lowercase, number and special character</span>}
                        </div>


                        <input className="w-full text-white font-bold bg-[#d1a054b3] px-5 py-3 rounded-lg mb-4 cursor-pointer" type="submit" value="Sign Up" />
                    </form>
                    <div className="text-center text-sm text-[#D1A054] mb-4">
                        <span className="font-medium">Already registered? </span>
                        <Link to="/login" className="hover:underline"><span className="font-bold">Login</span></Link>
                    </div>
                    <div className="text-[#444]">
                        <h3 className="font-medium text-center mb-3">Or sign in with</h3>
                        <div className="flex justify-center gap-5 items-center">
                            <BsFacebook className="text-4xl" />
                            <AiFillGoogleCircle onClick={continueWithGoogle} className="text-[41px] cursor-pointer" />
                            <BsGithub className="text-4xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;