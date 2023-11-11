import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("./menu.json")
            .then(res => {
                // const popularFoods = res.data.filter(item => item.category === "popular");
                setData(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            })
    }, [])

    return ({ data, loading });
};

export default useFetchData;