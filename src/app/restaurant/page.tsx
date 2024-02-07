"use client";
import MaxWidthWrapper from "@/components/helpComponents/MaxWidthWrapper/MaxWidthWrapper";
import { Bike, Calendar, IndianRupee, Star, Timer } from "lucide-react";

import * as React from "react";

import FoodCard from "@/components/restaurantComponents/foodCard/FoodCard";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const RestaurantPage = () => {
  const [position, setPosition] = React.useState("Select Time");
  return (
    <div className="mt-10">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-5">
          <div className="">
            <div className="flex justify-between">
              <div className="flex flex-col gap-5 ">
                <div className="text-2xl font-semibold">Name</div>
                <div className="">
                  <div className="">Pradhikaran 26 Pimpri Chinchwad Punedi</div>
                  <div className="">Pune, 2.7 Km</div>
                </div>
              </div>
              <div className="hidden  p-5 border rounded-sm md:flex flex-col justify-center gap-3">
                <div className="flex gap-2 justify-center">
                  <div className="">
                    <Star />
                  </div>
                  <div className="">4.5</div>
                </div>
                <div className=" ">
                  <hr className=""></hr>
                </div>
                <div className="">100 Ratings</div>
              </div>

              <div className="md:hidden   rounded-sm md:flex flex-col justify-center gap-3">
                <div className="flex gap-2 justify-center">
                  <div className="">
                    <Star />
                  </div>
                  <div className="">4.5</div>
                </div>
               
               
              </div>
            </div>
            <div className="flex gap-3 items-center ">
              <Bike />
              <div className=""> 2.7kms Rs 20 Delivery fee applies</div>
            </div>
          </div>
          <div className="">
            <hr className="border-dashed border"></hr>
          </div>
          <div className="flex gap-7">
            <div className="flex gap-2 justify-center items-center">
              <Timer />
              <div className="">10-20 mins</div>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <IndianRupee />
              <div className="">300 for Thali</div>
            </div>
          </div>

          <div className="flex gap-7 items-center">
            <div className="flex gap-1">
              <Calendar /> <div className="">02/12/2023</div>
            </div>
            <div className="hidden md:flex border px-5 py-4 rounded-lg">
              Breakfast
            </div>
            <div className="hidden md:flex border px-5 py-4 rounded-lg">
              Lunch
            </div>
            <div className="hidden md:flex border px-5 py-4 rounded-lg">
              Dinner
            </div>
            <div className="md:hidden  rounded-lg">
              {" "}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">{position}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                  >
                    <DropdownMenuRadioItem value="Breakfast">
                      Breakfast
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Lunch">
                      Lunch
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Dinner">
                      Dinner
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="mt-7">
            <hr className="border-dashed border"></hr>
          </div>

          <FoodCard/>
          <FoodCard/>
          <FoodCard/>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default RestaurantPage;
