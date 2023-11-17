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
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/admin-dashboard/AddItems";
import ManageItems from "../pages/admin-dashboard/ManageItems";
import UpdateItem from "../pages/admin-dashboard/UpdateItem";

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
                path: 'my-cart',
                element: <MyCart></MyCart>
            },

            // admin
            {
                path: 'all-users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'add-items',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'manage-items',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: 'update-item/:id',
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`),
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>
            }
        ]
    }
])

export default routes;