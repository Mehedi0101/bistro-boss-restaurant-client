import { useForm } from "react-hook-form";
import HeadingSection from "../../components/shared/HeadingSection";
import { ImSpoonKnife } from "react-icons/im";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddItems = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };

        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": 'multipart/form-data'
            }
        })

        if (res.data.success) {

            const newRecipe = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price)
            }

            const addRecipeResponse = await axiosSecure.post('/menu', newRecipe);
            if (addRecipeResponse?.data?.insertedId) {
                Swal.fire({
                    title: "Success!",
                    text: `${data.name} has been added successfully.`,
                    icon: "success"
                });
            }
        }
    };

    return (
        <div>
            <HeadingSection subHeading="What's new?" heading="ADD AN ITEM" />
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="mb-5">
                    <label htmlFor="name" className="text-[#444] font-semibold ml-1">Recipe name*</label><br />
                    <input {...register("name", { required: true })} className="mt-3 w-full outline-none p-4 border border-[#D0D0D0] rounded-lg" type="text" name="name" id="name" placeholder="Recipe name" />
                    <br />
                    {errors.name && <span className="text-red-600 text-sm ml-2">* This field is required</span>}
                </div>

                <div className="mb-5 flex gap-5">
                    <div className="flex-1">
                        <label htmlFor="category" className="text-[#444] font-semibold ml-1">Category*</label><br />
                        <select {...register("category")} className="mt-3 w-full outline-none p-4 border border-[#D0D0D0] rounded-lg" defaultValue="" name="category" id="category" required>
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
                        <input {...register("price", { required: true })} className="mt-3 w-full outline-none p-4 border border-[#D0D0D0] rounded-lg" type="text" name="price" id="price" placeholder="Price" />
                        <br />
                        {errors.name && <span className="text-red-600 text-sm ml-2">* This field is required</span>}
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="recipe" className="text-[#444] font-semibold ml-1">Recipe Details*</label><br />
                    <textarea {...register("recipe", { required: true })} className="mt-3 w-full outline-none p-4 border border-[#D0D0D0] rounded-lg resize-none" cols="30" rows="10" type="text" name="recipe" id="recipe" placeholder="Recipe Details" />
                    <br />
                    {errors.name && <span className="text-red-600 text-sm ml-2">* This field is required</span>}
                </div>

                <div className="mb-5">
                    <input {...register("image", { required: true })} className="mt-3 w-full outline-none p-4 rounded-lg resize-none" type="file" name="image" id="image" />
                    <br />
                    {errors.name && <span className="text-red-600 text-sm ml-2">* This field is required</span>}
                </div>

                <button className="text-white font-bold bg-[#B58130] px-5 py-3 mb-4 cursor-pointer flex items-center gap-1">
                    <p>Add Item</p>
                    <ImSpoonKnife />
                </button>
            </form>
        </div>
    );
};

export default AddItems;