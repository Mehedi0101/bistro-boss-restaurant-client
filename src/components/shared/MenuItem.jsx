import Proptypes from "prop-types";

const MenuItem = ({ item }) => {
    const { image, name, recipe, price } = item;
    return (
        <div className="flex gap-5 justify-between">
            <div className="flex gap-4">
                <img className="w-28 h-24 rounded-b-full rounded-e-full object-cover hidden sm:block" src={image} alt="" />
                <div className="pt-2">
                    <h3 className="cinzel text-xl text-[#151515] mb-1">{name} --------------</h3>
                    <p className="text-[#737373]">{recipe}</p>
                </div>
            </div>
            <div className="text-[#BB8506] pt-2">
                ${price}
            </div>
        </div>
    );
};

MenuItem.propTypes = {
    item: Proptypes.object.isRequired
}

export default MenuItem;