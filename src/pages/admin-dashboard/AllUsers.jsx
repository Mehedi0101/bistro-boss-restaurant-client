import { useQuery } from "@tanstack/react-query";
import HeadingSection from "../../components/shared/HeadingSection";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { BsFillTrash3Fill } from "react-icons/bs";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleDeleteUser = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted successfully.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    const handleMakeAdmin = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Success!",
                                text: "User has been made admin successfully.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <div>
            <HeadingSection subHeading="How many??" heading="MANAGE ALL USERS" />
            <p className="text-[#151515] text-2xl font-bold mt-20 cinzel">TOTAL USERS: {users.length}</p>

            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white">
                        <tr>
                            <th>#</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users?.map((user, idx) => <tr key={user._id}>
                                <td>
                                    {idx + 1}
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {
                                        user?.role === 'admin'
                                            ?
                                            'ADMIN'
                                            :
                                            <button onClick={() => handleMakeAdmin(user._id)} className="p-2 bg-[#D1A054] text-white rounded"><FaUsers /></button>
                                    }
                                    {/* <button onClick={() => handleMakeAdmin(user._id)} className="p-2 bg-[#D1A054] text-white rounded"><FaUsers /></button> */}
                                </td>
                                <th>
                                    <button onClick={() => handleDeleteUser(user._id)} className="p-2 bg-red-600 text-white rounded"><BsFillTrash3Fill /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUsers;