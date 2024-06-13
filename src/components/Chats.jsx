import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import { chatsData } from "../data/whatsapp";
import { LuFolderDown } from "react-icons/lu";

function Chats({ filter }) {
  const [chats, setChats] = useState(chatsData);

  useEffect(() => {
    const newChats = filter
      ? chatsData.filter((chat) => chat.unreadMsgs)
      : chatsData;
    setChats(newChats);
  }, [filter]);

  return (
    //   main container
    <div className="flex flex-col overflow-y-scroll cursor-pointer h-100 ">
      {/* archived container*/}
      <div className="flex justify-between items-center w-100 min-h-[55px] px-3 hover:bg-[#202d33]">
        {/*icon and text container*/}
        <div className="flex justify-around items-center w-[150px]">
          {/* icon  */}
          <span className="text-emerald-500 text-lg">
            <LuFolderDown />
          </span>
          {/* Archived */}
          <h1 className="text-white">Archived</h1>
        </div>

        {/* number of archived chats */}
        <p className="text-emerald-500 text-sm font-light">7</p>
      </div>

      {/* chats  */}
      {chats.map((chat, i) => {
        return (
          <Chat
            pp={chat.pp}
            contact={chat.contact}
            msg={chat.msg}
            time={chat.time}
            unreadMsgs={chat.unreadMsgs}
            active={i === 0}
          />
        );
      })}
    </div>
  );
}
export default Chats;
