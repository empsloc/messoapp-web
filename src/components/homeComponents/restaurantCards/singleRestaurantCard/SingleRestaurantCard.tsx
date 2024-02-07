import { Star, Timer } from "lucide-react"
import Image from "next/image"

const SingleRestaurantCard=()=>{
    return(
        <div className="">
            <div className="flex flex-col gap-5  bg-secondary dark:bg-gray-950 rounded-md dark:shadow-lg shadow-xl dark:shadow-blue-950">
                <div className="image w-full h-72 md:h-52 relative">
                    <Image className="rounded-lg" src="/resto1.png" alt="" fill/>
                </div>
                <div className="px-5 pb-5 flex flex-col gap-1">

                <div className="resto-name and rating flex justify-between ">
                    <div className="text-xl font-semibold">Reso Name</div>
                    <div className="flex items-center gap-2 px-2 py-1 bg-green-900 rounded-md">
                        <div className="text-white text-sm">4.5</div>
                        <div className=""><Star color="white" size={15}/></div>
                    </div>
                </div>
                <div className="flex gap-3 text-sm">
                    <div className="">BreakFast</div>
                    <div className="">Lunch</div>
                    <div className="">Dinner</div>
                </div>

                <div className="flex gap-3 text-sm text-gray-400">
                   Pradhikaran Sector 26 near Ganesh Talav Pune ....
                </div>

                <div className="flex gap-3 text-sm items-center mt-2">
                    <div className=""><Timer/></div>
                    <div className="">10-15 min</div>
                    <div className="">1 km</div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SingleRestaurantCard