import { FaBars, FaBookmark, FaCalendarAlt, FaHome, FaShoppingBag, FaShoppingCart, FaUsers, FaList, FaBook } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { ImSpoonKnife } from "react-icons/im";

const Sidebar = () => {
    const isAdmin = true;

    return (
        <div className="bg-[#D1A054] min-h-screen md:p-5 p-2 sm:w-fit w-1/4">
            <div className="cinzel xl:text-3xl sm:text-2xl text-lg font-black pt-6">
                <div>BISTRO BOSS</div>
                <div className="xl:text-xl xl:tracking-[9.9px] text-sm sm:text-lg font-bold sm:tracking-[6.8px] tracking-[4.6px]">Restaurant</div>
            </div>

            <div className="mt-10 flex flex-col gap-4 lg:text-base md:text-base text-xs">
                {
                    isAdmin
                        ?
                        <>
                            {/* admin home */}
                            <NavLink to="/dashboard/"
                                className={({ isActive }) =>
                                    isActive ? "text-white flex items-center gap-3 font-bold" : "text-[#151515] flex items-center gap-3 font-medium"
                                }
                            >
                                <FaHome className="text-2xl hidden sm:block" />ADMIN HOME
                            </NavLink>

                            {/* add items */}
                            <NavLink to="/dashboard/add-items"
                                className={({ isActive }) =>
                                    isActive ? "text-white flex items-center gap-3 font-bold" : "text-[#151515] flex items-center gap-3 font-medium"
                                }
                            >
                                <ImSpoonKnife className="text-2xl hidden sm:block" />ADD ITEMS
                            </NavLink>

                            {/* manage items */}
                            <NavLink to="/dashboard/manage-items"
                                className={({ isActive }) =>
                                    isActive ? "text-white flex items-center gap-3 font-bold" : "text-[#151515] flex items-center gap-3 font-medium"
                                }
                            >
                                <FaList className="text-2xl hidden sm:block" />MANAGE ITEMS
                            </NavLink>

                            {/* manage bookings */}
                            <NavLink to="/dashboard/manage-bookings"
                                className={({ isActive }) =>
                                    isActive ? "text-white flex items-center gap-3 font-bold" : "text-[#151515] flex items-center gap-3 font-medium"
                                }
                            >
                                <FaBook className="text-2xl hidden sm:block" />MANAGE BOOKINGS
                            </NavLink>

                            {/* all users */}
                            <NavLink to="/dashboard/all-users"
                                className={({ isActive }) =>
                                    isActive ? "text-white flex items-center gap-3 font-bold" : "text-[#151515] flex items-center gap-3 font-medium"
                                }
                            >
                                <FaUsers className="text-2xl hidden sm:block" />ALL USERS
                            </NavLink>
                        </>
                        :
                        <>
                            {/* user home */}
                            <NavLink to="/dashboard/"
                                className={({ isActive }) =>
                                    isActive ? "text-white flex items-center gap-3 font-bold" : "text-[#151515] flex items-center gap-3 font-medium"
                                }
                            >
                                <FaHome className="text-2xl hidden sm:block" />USER HOME
                            </NavLink>

                            {/* reservation */}
                            <NavLink to="/dashboard/reservation"
                                className={({ isActive }) =>
                                    isActive ? "text-white flex items-center gap-3 font-bold" : "text-[#151515] flex items-center gap-3 font-medium"
                                }
                            >
                                <FaCalendarAlt className="text-2xl hidden sm:block" />RESERVATION
                            </NavLink>

                            {/* payment history */}
                            <NavLink to="/dashboard/payment-history"
                                className={({ isActive }) =>
                                    isActive ? "text-white flex items-center gap-3 font-bold" : "text-[#151515] flex items-center gap-3 font-medium"
                                }
                            >
                                <FaMoneyCheckDollar className="text-2xl hidden sm:block" />PAYMENT HISTORY
                            </NavLink>

                            {/* my cart */}
                            <NavLink to="/dashboard/my-cart"
                                className={({ isActive }) =>
                                    isActive ? "text-white flex items-center gap-3 font-bold" : "text-[#151515] flex items-center gap-3 font-medium"
                                }
                            >
                                <FaShoppingCart className="text-2xl hidden sm:block" />MY CART
                            </NavLink>

                            {/* add review */}
                            <NavLink to="/dashboard/add-review"
                                className={({ isActive }) =>
                                    isActive ? "text-white flex items-center gap-3 font-bold" : "text-[#151515] flex items-center gap-3 font-medium"
                                }
                            >
                                <FaUsers className="text-2xl hidden sm:block" />ADD REVIEW
                            </NavLink>

                            {/* my booking */}
                            <NavLink to="/dashboard/my-booking"
                                className={({ isActive }) =>
                                    isActive ? "text-white flex items-center gap-3 font-bold" : "text-[#151515] flex items-center gap-3 font-medium"
                                }
                            >
                                <FaBookmark className="text-2xl hidden sm:block" />MY BOOKING
                            </NavLink>
                        </>
                }
            </div>

            <hr className="border-1 border-white my-5" />

            <div className="flex flex-col gap-4 lg:text-base md:text-base text-xs">
                <Link to='/' className="text-[#151515] flex items-center gap-3 font-medium">
                    <FaHome className="text-2xl hidden sm:block" />HOME
                </Link>

                <Link to='/menu' className="text-[#151515] flex items-center gap-3 font-medium">
                    <FaBars className="text-2xl hidden sm:block" />MENU
                </Link>

                <Link to='/order' className="text-[#151515] flex items-center gap-3 font-medium">
                    <FaShoppingBag className="text-2xl hidden sm:block" />SHOP
                </Link>

                <Link to='/contact-us' className="text-[#151515] flex items-center gap-3 font-medium">
                    <BiSolidContact className="text-2xl hidden sm:block" />CONTACT
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;