import { Helmet } from "react-helmet-async";
import Cover from "../components/shared/Cover";
import menuBg from "../assets/menu/banner3.jpg";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <Cover img={menuBg} heading={"OUR MENU"} description={"WOULD YOU LIKE TO TRY A DISH?"}></Cover>
        </div>
    );
};

export default Menu;