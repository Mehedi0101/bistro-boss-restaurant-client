import { Helmet } from "react-helmet-async";
import Cover from "../components/shared/Cover";
import orderBg from "../assets/order/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <Helmet>
                <title>Order Food</title>
            </Helmet>
            <Cover img={orderBg} heading={"ORDER FOOD"} description={"WOULD YOU LIKE TO TRY A DISH?"} type="pageCover"></Cover>

            <div className="md:px-10 px-5 mt-10">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;