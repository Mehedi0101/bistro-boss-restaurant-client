import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { BiMenu } from "react-icons/bi";
import "./styles/navbar.css";
import { useState } from "react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const links = <>
        <NavLink to="/" onClick={() => setShowMenu(!showMenu)}>HOME</NavLink>
        <NavLink onClick={() => setShowMenu(!showMenu)}>CONTACT US</NavLink>
        <NavLink onClick={() => setShowMenu(!showMenu)}>DASHBOARD</NavLink>
        <NavLink to="/menu" onClick={() => setShowMenu(!showMenu)}>OUR MENU</NavLink>
        <NavLink to="/order" onClick={() => setShowMenu(!showMenu)}>ORDER FOOD</NavLink>
    </>

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
                        <div id="hamburger" className="p-1 rounded-full bg-[#006837]"><GiShoppingCart className="text-2xl" /></div>
                        <button>SIGN IN</button>
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
                    <div className="p-1 rounded-full bg-[#006837]"><GiShoppingCart className="text-2xl" /></div>
                    <button>SIGN IN</button>
                </div>
                <div id="dropdown-menu" className={`absolute sm:text-sm text-xs font-extrabold gap-5 flex-col sm:top-[100px] top-[88px] bg-[#0f0f0fad] p-8 ${showMenu ? "flex" : "hidden"}`}>
                    {links}
                </div>
            </nav>
        </>
    );
};

export default Navbar;