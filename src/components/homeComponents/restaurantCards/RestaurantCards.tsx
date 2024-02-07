import AddButton from "./addButton/AddButton"
import SingleRestaurantCard from "./singleRestaurantCard/SingleRestaurantCard"

const RestaurantCards=()=>{
    return(
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
            <SingleRestaurantCard/>
            <SingleRestaurantCard/>
            <SingleRestaurantCard/>
            <SingleRestaurantCard/>
            <AddButton/>
            
        </div>
    )
}

export default RestaurantCards