import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFetchData = () => {
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     axios.get("http://localhost:5000/menu")
    //         .then(res => {
    //             setData(res.data);
    //             setLoading(false);
    //         })
    //         .catch(() => {
    //             setLoading(false);
    //         })
    // }, [])

    // return ({ data, loading });
    const axiosPublic = useAxiosPublic();

    const { data = [], isPending: loading, refetch } = useQuery({
        queryKey: ["data"],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    })
    return ({ data, loading, refetch });
};

export default useFetchData;