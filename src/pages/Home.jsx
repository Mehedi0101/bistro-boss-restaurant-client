import Category from "../components/home/Category";
import Feature from "../components/home/Feature";
import PopularItems from "../components/home/PopularItems";
import Slider from "../components/home/Slider";

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <Category></Category>
            <Feature></Feature>
            <PopularItems></PopularItems>
        </>
    );
};

export default Home;