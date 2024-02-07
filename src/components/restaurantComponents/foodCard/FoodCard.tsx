import { Dot, IndianRupee, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const FoodCard = () => {
    const [showComment, setShowComment] = useState(false)
  return (
    <div className="">
        <div className="flex flex-col gap-5">
      <div className="flex justify-between gap-2">
        <div className="flex flex-col gap-5">
          <div className="">
            <div className="text-lg ">Chicken Biryanid</div>
            <div className="text-lg flex items-center gap-1">
              <IndianRupee size={15} />
              <div className="">100</div>
            </div>
          </div>

          <div className="text-sm">
            Fragrant long grain basmati rice blended with Spicy fried chicken
            pieces cooked in traditional Indian spices.
          </div>
          <div className="">
            <div className="flex gap-2 items-center">
              <ThumbsUp />
              <div className="">2 Likes</div>
            </div>
          </div>
         
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <div className="h-20 relative w-20">
            <Image className="rounded-md" src="/resto1.png" alt="" fill />
          </div>
          <div className="">See more</div>
        </div>
      </div>
        <div className="flex flex-col gap-3">
      <div onClick={()=>setShowComment(!showComment)} className=" cursor-pointer">
            <div className="flex">
              <Dot />
              <div className="">Comments</div>
            </div>
          </div>

          {showComment&&<div className="ml-7 flex flex-col gap-3">
            <div className="flex">
              <div className="flex items-center gap-4">
                <div className="h-9 w-9 md:h-10 md:w-10 relative">
                  <Image src="/ayanokoji-modified.png" alt="" fill />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-bold">Feweb</div>
                  <div className="">
                    Aliqua voluptate consectetur non sit excepteur
                    reprehenderit.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="flex items-center gap-4">
                <div className="h-9 w-9 md:h-10 md:w-10 relative">
                  <Image src="/ayanokoji-modified.png" alt="" fill />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-bold">Feweb</div>
                  <div className="">
                    Aliqua voluptate consectetur non sit excepteur
                    reprehenderit.
                  </div>
                </div>
              </div>
            </div>
          </div>}

          </div>
          </div>
      <div className="mt-7">
        <hr className="border-t-1 border"></hr>
      </div>
    </div>
  );
};

export default FoodCard;
