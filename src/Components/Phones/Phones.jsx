/* eslint-disable react/prop-types */

// import useGetPhones from "../hooks/useGetPhones";
import PhonesCard from "./PhonesCard";

const Phones = ({ phones }) => {
    // usage of custom hook
   /*  const [getPhones] = useGetPhones([]);
    console.log(getPhones); */

    console.log(typeof phones);
    return (
        <div className="py-10">
            <h1 className="text-2xl text-center">All categories phones</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
                {
                    phones?.map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
                }
            </div>
            {/* <div>
                {
                    phones?.map(phone => console.log(phone))
                }
            </div> */}
        </div>
    );
};

export default Phones;