import { useEffect, useState } from "react";
import HeadingSection from "../shared/HeadingSection";
import axios from "axios";
import MenuItem from "../shared/MenuItem";

const PopularItems = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        axios.get("./menu.json")
            .then(res => {
                const popularFoods = res.data.filter(item => item.category === "popular");
                setPopular(popularFoods);
            })
    }, [])

    return (
        <div className="md:mt-20 mt-10 md:px-10 px-5 max-w-screen-2xl mx-auto">
            <HeadingSection subHeading={"Check it out"} heading={"FROM OUR MENU"}></HeadingSection>
            <div className="grid grid-cols-1 mx-auto xl:grid-cols-2 gap-5 mt-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className="px-5 py-2 text-[#1F2937] text-lg font-medium mt-10 mx-auto block border-b-2 border-[#1F2937] rounded">VIEW FULL MENU</button>
        </div>
    );
};

export default PopularItems;