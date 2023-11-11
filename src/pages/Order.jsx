import { Helmet } from "react-helmet-async";
import Cover from "../components/shared/Cover";
import orderBg from "../assets/order/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useFetchData from "../hooks/useFetchData";
import OrderList from "../components/order/OrderList";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const { data } = useFetchData();

    const drinksItems = data.filter(item => item.category === "drinks");
    const pizzaItems = data.filter(item => item.category === "pizza");
    const soupItems = data.filter(item => item.category === "soup");
    const saladItems = data.filter(item => item.category === "salad");
    const dessertItems = data.filter(item => item.category === "dessert");

    return (
        <div>
            <Helmet>
                <title>Order Food</title>
            </Helmet>
            <Cover img={orderBg} heading={"ORDER FOOD"} description={"WOULD YOU LIKE TO TRY A DISH?"} type="pageCover"></Cover>

            <div className="md:px-10 px-5 md:mt-20 mt-10">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>

                    <TabPanel>
                        <OrderList items={saladItems}></OrderList>
                    </TabPanel>
                    
                    <TabPanel>
                        <OrderList items={pizzaItems}></OrderList>
                    </TabPanel>

                    <TabPanel>
                        <OrderList items={soupItems}></OrderList>
                    </TabPanel>

                    <TabPanel>
                        <OrderList items={dessertItems}></OrderList>
                    </TabPanel>

                    <TabPanel>
                        <OrderList items={drinksItems}></OrderList>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default Order;