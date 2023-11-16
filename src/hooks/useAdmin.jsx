import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const { currentUser } = useContext(AuthContext);

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [currentUser?.email, 'isAdmin'],
        queryFn: async () => {
            if (currentUser?.email) {
                const res = await axiosSecure.get(`/users/admin/${currentUser?.email}`);
                return res?.data?.admin;
            }
        }
    })
    return [isAdmin, isAdminLoading];
};

export default useAdmin;