import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserDashboard from "../layouts/UserDashboard";
import MyCart from "../pages/user-dashboard/MyCart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/admin-dashboard/AllUsers";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>,
        children: [
            // users
            {
                path: '/dashboard/my-cart',
                element: <MyCart></MyCart>
            },

            // admin
            {
                path: '/dashboard/all-users',
                element: <AllUsers></AllUsers>
            }
        ]
    }
])

export default routes;