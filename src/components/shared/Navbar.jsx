import { Link, NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { BiMenu } from "react-icons/bi";
import "./styles/navbar.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import defaultUserImg from "../../assets/authentication/profile.png";
import { Store } from "react-notifications-component";
import useCart from "../../hooks/useCart";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { currentUser, logoutUser } = useContext(AuthContext);
    const { cart } = useCart();

    const links = <>
        <NavLink to="/" onClick={() => setShowMenu(!showMenu)}>HOME</NavLink>
        <NavLink to="/contact-us" onClick={() => setShowMenu(!showMenu)}>CONTACT US</NavLink>
        <NavLink to="/dashboard" onClick={() => setShowMenu(!showMenu)}>DASHBOARD</NavLink>
        <NavLink to="/menu" onClick={() => setShowMenu(!showMenu)}>OUR MENU</NavLink>
        <NavLink to="/order" onClick={() => setShowMenu(!showMenu)}>ORDER FOOD</NavLink>
    </>

    const handleSignOut = () => {
        logoutUser()
            .then(() => {
                Store.addNotification({
                    title: "Successful",
                    message: "You have successfully logged out",
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
            })
            .catch(() => {
                Store.addNotification({
                    title: "Failed",
                    message: "Something went wrong",
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

    return (
        <>
            {/* larger device */}
            <nav className="bg-[#15151580] text-white absolute w-full py-5 lg:block hidden z-10">
                <div className="flex items-center justify-between px-10 max-w-screen-2xl mx-auto">
                    <div className="cinzel text-3xl font-black">
                        <div>BISTRO BOSS</div>
                        <div className="text-xl font-bold tracking-[9.9px]">Restaurant</div>
                    </div>
                    <div className="flex items-center base gap-5 font-extrabold">
                        {links}
                        <Link to='/dashboard/my-cart'>
                            <div className="p-1 rounded-full bg-[#006837] relative cursor-pointer">
                                <GiShoppingCart className="text-2xl" />
                                <div className="text-xs font-light px-[6px] py-px absolute bg-red-600 text-white rounded-full -bottom-2 -right-1">{cart?.length || 0}</div>
                            </div>
                        </Link>
                        {
                            currentUser
                                ?
                                <div className="flex items-center gap-1">
                                    <button onClick={handleSignOut}>SIGN OUT</button>
                                    <img className="w-8 h-8 rounded-full object-cover" src={currentUser?.photoURL || defaultUserImg} alt="" />
                                </div>
                                :
                                <Link to="/login"><button>SIGN IN</button></Link>
                        }
                    </div>
                </div>
            </nav>

            {/* smaller device */}
            <nav className="bg-[#15151580] text-white absolute w-full py-5 flex lg:hidden items-center justify-between md:px-10 px-5 gap-2 z-10">
                <div className="flex gap-2 items-center">
                    <BiMenu onClick={() => setShowMenu(!showMenu)} className="text-2xl" />
                    <div className="cinzel sm:text-2xl text-lg font-black">
                        <div>BISTRO BOSS</div>
                        <div className="text-sm sm:text-lg font-bold sm:tracking-[6.8px] tracking-[4.6px]">Restaurant</div>
                    </div>
                </div>
                <div className="flex items-center gap-2 sm:text-sm text-xs font-extrabold">
                    <Link to='/dashboard/my-cart'>
                        <div className="p-1 rounded-full bg-[#006837] relative">
                            <GiShoppingCart className="text-2xl" />
                            <div className="text-xs font-light px-[6px] py-px absolute bg-red-600 text-white rounded-full -bottom-2 -right-1">{cart?.length || 0}</div>
                        </div>
                    </Link>
                    {
                        currentUser
                            ?
                            <div className="flex items-center gap-1">
                                <button onClick={handleSignOut}>SIGN OUT</button>
                                <img className="w-8 h-8 rounded-full object-cover" src={currentUser?.photoURL || defaultUserImg} alt="" />
                            </div>
                            :
                            <Link to="/login"><button>SIGN IN</button></Link>
                    }
                </div>
                <div id="dropdown-menu" className={`absolute sm:text-sm text-xs font-extrabold gap-5 flex-col sm:top-[100px] top-[88px] bg-[#0f0f0fad] p-8 ${showMenu ? "flex" : "hidden"}`}>
                    {links}
                </div>
            </nav>
        </>
    );
};

export default Navbar;