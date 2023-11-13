import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { currentUser } = useContext(AuthContext);

    const { data: cart = {}, refetch } = useQuery({
        queryKey: ["cart", currentUser?.email],
        queryFn: async () => {
            if (currentUser?.email) {
                const res = await axiosSecure.get(`/orders?email=${currentUser?.email}`);
                return res.data;
            }
        }
    })
    return { cart, refetch };
};

export default useCart;