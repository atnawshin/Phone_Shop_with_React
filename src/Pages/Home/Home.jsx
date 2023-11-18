import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Phones from "../../Components/Phones/Phones";
import useGetPhones from "../../Components/hooks/useGetPhones";

const Home = () => {

    /* const [phones] = useGetPhones([]);
    // console.log(phones); */

    const phones = useLoaderData([]);
    console.log(phones);
    return (
        <div>
            <Banner></Banner>
            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;