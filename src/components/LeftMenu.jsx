import React from "react";
import RoundedBtn from "./common/RoundedBtn";
import { MdPeopleAlt } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { MdFilterList } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import pp from "../assets/images/pp.png";

function LeftMenu() {
  return (
    // LeftMenu Container
    <div className="flex flex-col border-r border-neutral-700 w-100 h-screen">
      {/* profile nav */}
      <div className="flex justify-between items-center bg-[#202d32] h-[60px] p-3">
        {/* profile section */}
        <img src={pp} alt="profile_picture" className="w-[40px] rounded-full" />
        {/* profile nav button  */}
        <div className="flex justify-between w-[175px] ">
          <RoundedBtn icon={<MdPeopleAlt />} />
          <RoundedBtn icon={<TbCircleDashed />} />
          <RoundedBtn icon={<BiMessageRoundedDetail />} />
          <RoundedBtn icon={<HiDotsVertical />} />
        </div>
      </div>

      {/* search and filter */}
      <div className="flex justify-between items-center h-[60px] p-3 ">
        {/* search input */}
        <div className="relative w-[400px]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <GoSearch className="text-[#8796a1]" />
          </div>
          <input
            type="text"
            placeholder="Search or start a new chat"
            className="rounded-lg bg-[#202d33] text-[#8796a1] text-xs font-light outline-none pl-10 pr-4 py-2 w-full h-[35px] placeholder:text-[#8796a1] placeholder:text-sm"
          />
        </div>
        {/* filter Button  */}
        <button className="text-2xl m-2 p-1 rounded-full">
          <MdFilterList className="text-gray-400" />
        </button>
      </div>
      {/* chats */}
    </div>
  );
}

export default LeftMenu;
