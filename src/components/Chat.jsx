import React from "react";

function Chat({ pp, contact, msg, time, unreadMsgs, active }) {
  return (
    //Main chat container
    <div
      className={`flex justify-between items-center cursor-pointer w-100 h-[70px] p-3 hover:bg-[#202d33] ${
        active ? "bg[#202d33]" : ""
      }`}>
      {/* profile photo container */}
      <img
        src={pp}
        alt="profile_picture"
        className="rounded-full w-[50px] mr-5"
      />

      {/* info Container  */}
      <div className="flex justify-between  border-neutral-700 w-100 h-100">
        {/* contact name and message */}
        <div className="flex flex-col justify-between font-medium text-white ">
          {/* contact */}
          <h1 className="font-medium">{contact}</h1>
          {/* message */}
          <p className={`text-sm ${!unreadMsgs ? "text-neutral-400" : ""}`}>
            {msg}
          </p>
        </div>
        {/* time and number of messages */}
        <div className="flex flex-col justify-between items-end h-100 text-sm">
          {/* time  */}
          <p
            className={`text-emerald-500 min-w-[55px] ${
              !unreadMsgs ? "text-neutral-400" : ""
            }`}>
            {time}
          </p>
          {/* number of message */}
          {unreadMsgs && (
            <div className="flex justify-center items-center rounded-full bg-emerald-500  w-[20px] h-[20px]">
              <p className="text-emerald-900">{unreadMsgs}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;
