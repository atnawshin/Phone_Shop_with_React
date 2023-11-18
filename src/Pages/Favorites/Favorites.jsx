import { useEffect, useState } from "react";
// import PhoneCard from "../Phone/PhoneCard";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [noDataFound, setNoDataFound] = useState("");
    const [isShowMore, setIsShowMore] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'));

        const total = favoriteItems.reduce((previousValue, currentItem) => previousValue + currentItem.price, 0);
        console.log(totalPrice);
        setTotalPrice(total);

        if (favoriteItems) {
            setFavorites(favoriteItems);
        } else {
            setNoDataFound("No Data Found...");
            // console.log("No data found");
        }

        // const favoriteItems = JSON.parse(localStorage.getItem('favorites'))
    }, [])

    console.log(favorites);

    const handleRemove = () => {
        localStorage.clear();
        setFavorites([]);
        setNoDataFound("No Data Found...");
    }

    return (
        <div>
            {
                noDataFound ?
                    <p className="h-[80vh] flex justify-center items-center text-4xl">{noDataFound}</p>
                    :
                    <div>
                        {
                            favorites.length > 0 && <button onClick={handleRemove} className="px-5 bg-green-200 block mx-auto p-2 border-stone-400 shadow-lg font-semibold uppercase border-2 rounded-lg my-10">Deleted All Favorites</button>
                        }
                        <div className="text-left text-2xl font-bold my-10 bg-slate-200 p-6 mx-72 rounded-lg shadow-inner">
                            Total Price = ${totalPrice}
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            {
                                isShowMore ? favorites.map(phone => <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>)
                                    : favorites.slice(0, 2).map(phone => <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>)
                            }
                        </div>
                        <div>
                            {
                                favorites.length > 2 &&
                                <button onClick={() => { setIsShowMore(!isShowMore) }} className="px-5 bg-green-200 block mx-auto p-2 border-stone-400 shadow-lg font-semibold uppercase border-2 rounded-lg my-10">
                                    {isShowMore ? "Show Less" : "Show More"}
                                </button>
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Favorites;