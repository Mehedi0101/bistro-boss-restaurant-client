import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link } from "react-router-dom";
import authBg from "../assets/authentication/authentication.png";
import authImg from "../assets/authentication/authentication2.png";
import FormField from "../components/authentication/FormField";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { MdOutlineDangerous } from "react-icons/md";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const { loginUser } = useContext(AuthContext);

    const [captchaMatched, setCaptchaMatched] = useState(false);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleSignIn = e => {
        e.preventDefault();

        setCaptchaMatched(false);

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;

        if (validateCaptcha(captcha)) {
            setCaptchaMatched(false);
        }
        else {
            return setCaptchaMatched(true);
        }

        loginUser(email,password)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })

    }



    return (
        <div className="min-h-screen lg:p-20" style={{ backgroundImage: `url(${authBg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="max-w-screen-2xl mx-auto shadow-xl border-2 border-[#0000001f] shadow-[#00000040] flex md:flex-row flex-col justify-center items-center">
                <div className="md:w-1/2">
                    <img className="p-5 xl:p-10" src={authImg} alt="" />
                </div>

                <div className="md:w-1/2 w-full px-10 xl:px-20 py-10">
                    <h2 className="text-[#151515] lg:text-3xl text-2xl text-center font-bold mb-4">Login</h2>
                    <form onSubmit={handleSignIn}>
                        <FormField label="Email" type="email" name="email" placeholder="Type here" />
                        <FormField label="Password" type="password" name="password" placeholder="Enter your password" />
                        < LoadCanvasTemplate reloadText="Reload" reloadColor="#D1A054" />
                        <input className="mt-3 w-full outline-none p-4 border border-[#D0D0D0] rounded-lg mb-5" type="text" name="captcha" id="captcha" placeholder="Type here" />
                        {
                            captchaMatched && <div className='text-red-600 flex items-center gap-1 mb-5 -mt-4'><MdOutlineDangerous className='text-2xl' />Try Again</div>
                        }
                        <input className="w-full text-white font-bold bg-[#d1a054b3] px-5 py-3 rounded-lg mb-4" type="submit" value="Sign In" />
                    </form>
                    <div className="text-center text-sm text-[#D1A054] mb-4">
                        <span className="font-medium">New here? </span>
                        <Link to="/register" className="hover:underline"><span className="font-bold">Create a New Account</span></Link>
                    </div>
                    <div className="text-[#444]">
                        <h3 className="font-medium text-center mb-3">Or sign in with</h3>
                        <div className="flex justify-center gap-5 items-center">
                            <BsFacebook className="text-4xl" />
                            <AiFillGoogleCircle className="text-[41px]" />
                            <BsGithub className="text-4xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;