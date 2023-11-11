import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:5000/menu")
            .then(res => {
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