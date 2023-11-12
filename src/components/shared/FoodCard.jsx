import Proptypes from "prop-types";

const FoodCard = ({ item }) => {
    const { image, name, recipe, price } = item;
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
                    <button className="px-5 py-2 text-[#BB8506] text-lg font-medium mt-5 mx-auto block border-b-2 bg-[#E8E8E8] border-[#BB8506] rounded hover:bg-[#1F2937] transition-colors">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    item: Proptypes.object.isRequired
}

export default FoodCard;