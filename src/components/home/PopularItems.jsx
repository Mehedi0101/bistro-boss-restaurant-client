import HeadingSection from "../shared/HeadingSection";
import useFetchData from "../../hooks/useFetchData";
import ItemsList from "../shared/ItemsList";

const PopularItems = () => {
    const { data } = useFetchData();
    // const { loading } = useFetchData();

    const popularFoods = data.filter(item => item.category === "popular");

    return (
        <div className="md:mt-20 mt-10 md:px-10 px-5 max-w-screen-2xl mx-auto">
            <HeadingSection subHeading={"Check it out"} heading={"FROM OUR MENU"}></HeadingSection>
            <ItemsList items={popularFoods} btnText="VIEW FULL MENU"></ItemsList>
        </div>
    );
};

export default PopularItems;