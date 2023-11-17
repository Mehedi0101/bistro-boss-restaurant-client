import { useForm } from "react-hook-form";
import HeadingSection from "../../components/shared/HeadingSection";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateItem = () => {
    const { _id, name, price, recipe, category } = useLoaderData();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };

        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": 'multipart/form-data'
            }
        })

        if (res.data.success) {

            const updatedRecipe = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price)
            }

            const updateRecipeResponse = await axiosSecure.patch(`/menu/${_id}`, updatedRecipe);
            if (updateRecipeResponse?.data?.modifiedCount > 0) {
                Swal.fire({
                    title: "Success!",
                    text: `${name} has been updated successfully.`,
                    icon: "success"
                });
                navigate('/dashboard/manage-items');
            }
        }
    };

    return (
        <div>
            <HeadingSection subHeading="What's new?" heading="UPDATE ITEM" />
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="mb-5">
                    <label htmlFor="name" className="text-[#444] font-semibold ml-1">Recipe name*</label><br />
                    <input {...register("name", { required: true })} defaultValue={name} className="mt-3 w-full outline-none p-4 border border-[#D0D0D0] rounded-lg" type="text" name="name" id="name" placeholder="Recipe name" />
                    <br />
                    {errors.name && <span className="text-red-600 text-sm ml-2">* This field is required</span>}
                </div>

                <div className="mb-5 flex gap-5">
                    <div className="flex-1">
                        <label htmlFor="category" className="text-[#444] font-semibold ml-1">Category*</label><br />
                        <select {...register("category")} defaultValue={category} className="mt-3 w-full outline-none p-4 border border-[#D0D0D0] rounded-lg" name="category" id="category" required>
                            <option value="" disabled>Category</option>
                            <option value="salad">Salad</option>
                            <option value="male">Pizza</option>
                            <option value="soups">Soups</option>
                            <option value="desserts">Desserts</option>
                            <option value="drinks">Drinks</option>
                        </select>
                        <br />
                        {errors.category && <span className="text-red-600 text-sm ml-2">* This field is required</span>}
                    </div>

                    <div className="flex-1">
                        <label htmlFor="price" className="text-[#444] font-semibold ml-1">Price*</label><br />
                        <input {...register("price", { required: true })} defaultValue={price} className="mt-3 w-full outline-none p-4 border border-[#D0D0D0] rounded-lg" type="text" name="price" id="price" placeholder="Price" />
                        <br />
                        {errors.price && <span className="text-red-600 text-sm ml-2">* This field is required</span>}
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="recipe" className="text-[#444] font-semibold ml-1">Recipe Details*</label><br />
                    <textarea {...register("recipe", { required: true })} defaultValue={recipe} className="mt-3 w-full outline-none p-4 border border-[#D0D0D0] rounded-lg resize-none" cols="30" rows="10" type="text" name="recipe" id="recipe" placeholder="Recipe Details" />
                    <br />
                    {errors.recipe && <span className="text-red-600 text-sm ml-2">* This field is required</span>}
                </div>

                <div className="mb-5">
                    <input {...register("image", { required: true })} className="mt-3 w-full outline-none p-4 rounded-lg resize-none" type="file" name="image" id="image" />
                    <br />
                    {errors.image && <span className="text-red-600 text-sm ml-2">* This field is required</span>}
                </div>

                <button className="text-white font-bold bg-[#B58130] px-5 py-3 mb-4 cursor-pointer mx-auto block">
                    Update Recipe Details
                </button>
            </form>
        </div>
    );
};

export default UpdateItem;