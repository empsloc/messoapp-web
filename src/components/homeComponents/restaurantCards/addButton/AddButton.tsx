import { Plus } from "lucide-react";

const AddButton = () => {
  return (
    <div className="">
      <div className="cursor-pointer h-72 md:h-72 lg:h-full flex items-center justify-center   bg-secondary dark:bg-gray-950 rounded-md hover:shadow-xl dark:hover:shadow-blue-950 ">
        <div className="dark:flex hidden "><Plus size={100} /></div>
        <div className="dark:hidden"><Plus size={100} color="gray"/></div>
      </div>
    </div>
  );
};

export default AddButton;
