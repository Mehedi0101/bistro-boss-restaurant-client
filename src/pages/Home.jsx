import CallUs from "../components/home/CallUs";
import Category from "../components/home/Category";
import Feature from "../components/home/Feature";
import PopularItems from "../components/home/PopularItems";
import Recommendation from "../components/home/Recommendation";
import Slider from "../components/home/Slider";
import SpecialItem from "../components/home/SpecialItem";

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <Category></Category>
            <Feature></Feature>
            <PopularItems></PopularItems>
            <CallUs></CallUs>
            <Recommendation></Recommendation>
            <SpecialItem></SpecialItem>
        </>
    );
};

export default Home;