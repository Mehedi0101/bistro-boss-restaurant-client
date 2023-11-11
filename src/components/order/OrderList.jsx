import Proptypes from "prop-types";
import FoodCard from "../shared/FoodCard";

const OrderList = ({items}) => {
    return (
        <div className="md:mt-16 mt-10 max-w-screen-2xl mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 md:px-10 px-5">
                {
                    items.map(item => <FoodCard key={item._id} item={item}></FoodCard>
                    )
                }
            </div>
        </div>
    );
};

OrderList.propTypes = {
    items: Proptypes.array.isRequired
}


export default OrderList;