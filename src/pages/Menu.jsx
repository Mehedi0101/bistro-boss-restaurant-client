import { Helmet } from "react-helmet-async";
import Cover from "../components/shared/Cover";
import menuBg from "../assets/menu/banner3.jpg";
import HeadingSection from "../components/shared/HeadingSection";
import useFetchData from "../hooks/useFetchData";
import ItemsList from "../components/shared/ItemsList";
import pizzaBg from "../assets/cover/pizza-bg.jpg";
import soupBg from "../assets/cover/soup-bg.jpg";
import saladBg from "../assets/cover/salad-bg.jpg";
import dessertBg from "../assets/cover/dessert-bg.jpeg";

const Menu = () => {

    const { data } = useFetchData();

    const offeredItems = data.filter(item => item.category === "offered");
    const pizzaItems = data.filter(item => item.category === "pizza");
    const soupItems = data.filter(item => item.category === "soup");
    const saladItems = data.filter(item => item.category === "salad");
    const dessertItems = data.filter(item => item.category === "dessert");
    return (
        <div>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <Cover img={menuBg} heading={"OUR MENU"} description={"WOULD YOU LIKE TO TRY A DISH?"} type="pageCover"></Cover>

            <div className="md:mt-20 mt-10 md:px-10 px-5 max-w-screen-2xl mx-auto">
                <HeadingSection subHeading="Don't miss" heading="TODAY'S OFFER"></HeadingSection>
                <ItemsList items={offeredItems} btnText="ORDER YOUR FAVORITE FOOD"></ItemsList>
            </div>

            <div className="md:mt-20 mt-10">
                <Cover img={pizzaBg} heading="PIZZA" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." type="menuCover"></Cover>
                <div className="md:px-10 px-5 max-w-screen-2xl mx-auto">
                    <ItemsList items={pizzaItems} btnText="ORDER YOUR FAVORITE FOOD"></ItemsList>
                </div>
            </div>

            <div className="md:mt-20 mt-10">
                <Cover img={soupBg} heading="SOUPS" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." type="menuCover"></Cover>
                <div className="md:px-10 px-5 max-w-screen-2xl mx-auto">
                    <ItemsList items={soupItems} btnText="ORDER YOUR FAVORITE FOOD"></ItemsList>
                </div>
            </div>

            <div className="md:mt-20 mt-10">
                <Cover img={saladBg} heading="SALADS" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." type="menuCover"></Cover>
                <div className="md:px-10 px-5 max-w-screen-2xl mx-auto">
                    <ItemsList items={saladItems} btnText="ORDER YOUR FAVORITE FOOD"></ItemsList>
                </div>
            </div>

            <div className="md:mt-20 mt-10">
                <Cover img={dessertBg} heading="DESSERTS" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." type="menuCover"></Cover>
                <div className="md:px-10 px-5 max-w-screen-2xl mx-auto">
                    <ItemsList items={dessertItems} btnText="ORDER YOUR FAVORITE FOOD"></ItemsList>
                </div>
            </div>

        </div>
    );
};

export default Menu;