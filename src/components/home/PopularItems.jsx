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
        <div className="md:mt-20 mt-10 md:px-10 px-5">
            <HeadingSection subHeading={"Check it out"} heading={"FROM OUR MENU"}></HeadingSection>
            <div className="grid grid-cols-2 gap-5 mt-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularItems;