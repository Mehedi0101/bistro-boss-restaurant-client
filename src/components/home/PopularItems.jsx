import HeadingSection from "../shared/HeadingSection";
import MenuItem from "../shared/MenuItem";
import useFetchData from "../../hooks/useFetchData";

const PopularItems = () => {
    const { data } = useFetchData();
    const { loading } = useFetchData();

    const popularFoods = data.filter(item => item.category === "popular");

    return (
        <div className="md:mt-20 mt-10 md:px-10 px-5 max-w-screen-2xl mx-auto">
            <HeadingSection subHeading={"Check it out"} heading={"FROM OUR MENU"}></HeadingSection>
            <div className="grid grid-cols-1 mx-auto xl:grid-cols-2 gap-5 mt-10">
                {
                    popularFoods.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className="px-5 py-2 text-[#1F2937] text-lg font-medium mt-10 mx-auto block border-b-2 border-[#1F2937] rounded">VIEW FULL MENU</button>
        </div>
    );
};

export default PopularItems;