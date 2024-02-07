"use client"
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import ThemeToggleButton from "../themeToggleButton/ThemeToggleButton";

const Navbar = () => {
  const  [openSideBar, setOpenSideBar] = useState(false)
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
          <Link href="/auth" className="">Login</Link>
          </div>
          <div onClick={()=>setOpenSideBar(!openSideBar)} className="md:hidden"><Menu/></div>

        </div>
        
      </div>
    {openSideBar&&<div className="flex justify-end"><div className="shadow-xl -mr-20 translate-x-0 absolute transition transform  duration-150 bg-white dark:bg-slate-950 w-96 h-full z-10">
      <MaxWidthWrapper>
    <div className="flex flex-col gap-7  items-end mr-10 mt-7">
          <div onClick={()=>setOpenSideBar(false)} className="">Home</div>
          <div onClick={()=>setOpenSideBar(false)} className="">All Mess</div>
          <div onClick={()=>setOpenSideBar(false)} className="">About</div>
          <Link onClick={()=>setOpenSideBar(false)} href="/auth" className="">Login</Link>
          </div></MaxWidthWrapper></div></div>
          }
    </MaxWidthWrapper>
  );
};

export default Navbar;
