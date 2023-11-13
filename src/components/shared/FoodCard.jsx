import Proptypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { Store } from "react-notifications-component";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { _id, image, name, recipe, price } = item;
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const axiosSecure = useAxiosSecure();
    const { refetch } = useCart();

    const handleAddToCart = () => {
        if (currentUser) {
            const orderData = {
                email: currentUser?.email,
                foodId: _id,
                image,
                name,
                price
            }
            axiosSecure.post('/orders', orderData)
                .then(res => {
                    console.log(res.data)
                    if (res?.data?.insertedId) {
                        Store.addNotification({
                            title: "Successful",
                            message: `${name} added to the cart`,
                            type: "success",
                            insert: "top",
                            container: "top-center",
                            animationIn: ["animate__animated", "animate__fadeIn"],
                            animationOut: ["animate__animated", "animate__fadeOut"],
                            dismiss: {
                                duration: 2000,
                                onScreen: true
                            }
                        });
                        refetch();
                    }
                })
                .catch(() => {

                })
        }
        else {
            Swal.fire({
                title: "You are not signed in",
                text: "If you want order something you have to sign in first",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sign in"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: pathname })
                }
            });
        }
    }

    return (
        <div className="card max-w-96 w-full rounded-none">
            <figure>
                <div className="relative">
                    <img src={image} alt="Shoes" />
                    <div className="absolute top-4 right-4 px-3 font-semibold py-1 bg-[#111827] text-white">{price}</div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAddToCart} className="px-5 py-2 text-[#BB8506] text-lg font-medium mt-5 mx-auto block border-b-2 bg-[#E8E8E8] border-[#BB8506] rounded hover:bg-[#1F2937] transition-colors">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    item: Proptypes.object.isRequired
}

export default FoodCard;