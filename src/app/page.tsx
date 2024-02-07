import MaxWidthWrapper from "@/components/helpComponents/MaxWidthWrapper/MaxWidthWrapper";
import RestaurantCards from "@/components/homeComponents/restaurantCards/RestaurantCards";

export default function Home() {
  return (
   <MaxWidthWrapper >
    <div className="mt-10">
    <RestaurantCards/>
   </div>
   </MaxWidthWrapper>
  );
}
