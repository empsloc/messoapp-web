import { Menu } from "lucide-react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import ThemeToggleButton from "../themeToggleButton/ThemeToggleButton";

const Navbar = () => {
  return (
    <MaxWidthWrapper className="">
      <div className="grid grid-cols-3">
        <div className="text-3xl font-bold col-span-1">Messoapp</div>
        <div className="flex justify-end items-center gap-10 col-span-2">
        <ThemeToggleButton />
        <div className="hidden md:flex gap-7 ">
          <div className="">Home</div>
          <div className="">All Mess</div>
          <div className="">About</div>
          <div className="">Login</div>
          </div>
          <div className="md:hidden"><Menu/></div>
        </div>
        
      </div>
    </MaxWidthWrapper>
  );
};

export default Navbar;
