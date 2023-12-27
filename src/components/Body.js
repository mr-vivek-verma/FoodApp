import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.890759&lng=81.059376&carousel=true&third_party_vendor=1"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json.data.cards[2].card.card.gridElements?.infoWithStyle.restaurants
    );
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants?.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          TopRatedRestaurant
        </button>
        <button>Search</button>
      </div>
      <div className="restaurant-container">
        {/* So here we have passed props */}
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
