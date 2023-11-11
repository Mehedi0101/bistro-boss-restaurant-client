import Proptypes from "prop-types";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

const ItemsList = ({ items, btnText }) => {
    return (
        <>
            <div className="grid grid-cols-1 mx-auto xl:grid-cols-2 gap-5 mt-10">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to='/order'>
                <button className="px-5 py-2 text-[#1F2937] text-lg font-medium mt-10 mx-auto block border-b-2 border-[#1F2937] rounded hover:bg-[#1F2937] hover:text-white transition-all">{btnText}</button>
            </Link>
        </>
    );
};

ItemsList.propTypes = {
    items: Proptypes.array.isRequired,
    btnText: Proptypes.string.isRequired,
}

export default ItemsList;