import { BsFillTrash3Fill } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";
import HeadingSection from "../../components/shared/HeadingSection";
import useFetchData from "../../hooks/useFetchData";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const ManageItems = () => {
    const { data: menu, refetch } = useFetchData();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const handleUpdate = id => {
        navigate(`/dashboard/update-item/${id}`)
    }

    const handleRemove = id => {
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
                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Recipe has been deleted successfully.",
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
            <HeadingSection subHeading="Hurry Up!" heading="MANAGE ALL ITEMS" />

            <div className="overflow-auto mt-10 max-h-screen">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white">
                        <tr>
                            <th>#</th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>UPDATE</th>
                            <th>REMOVE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            menu?.map((item, idx) => <tr key={item._id}>
                                <td>
                                    {idx + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.price}</td>
                                <td>
                                    <button onClick={() => handleUpdate(item._id)} className="p-2 bg-[#D1A054] text-white rounded"><FaRegPenToSquare /></button>
                                </td>
                                <td>
                                    <button onClick={() => handleRemove(item._id)} className="p-2 bg-red-600 text-white rounded"><BsFillTrash3Fill /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItems;