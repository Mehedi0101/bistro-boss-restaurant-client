import Proptypes from "prop-types";

const MenuItem = ({ item }) => {
    const { image, name, recipe, price } = item;
    return (
        <div className="flex gap-5">
            <div>
                <img className="w-32 h-24 rounded-b-full rounded-e-full object-cover" src={image} alt="" />
            </div>
            <div>
                <h3 className="cinzel text-xl text-[#151515] mb-1">{name} --------------</h3>
                <p className="text-[#737373]">{recipe}</p>
            </div>
            <div className="text-[#BB8506]">
                ${price}
            </div>
        </div>
    );
};

MenuItem.propTypes = {
    item: Proptypes.object.isRequired
}

export default MenuItem;