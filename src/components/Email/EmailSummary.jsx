import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const EmailSummary = ({ data, type }) => {
  const newData = [...data].filter((item) => {
    return item.folder === type;
  });
  return (
    <div className="constructor-right flex text-black">
      <div className="w-[350px] h-full border-r border-gray-300 overflow-hidden">
        <div className="h-full overflow-scroll">
          {newData.map((item) => (
            <NavLink
              to={`/main/email/${type}/${item.id}`}
              className={({ isActive }) =>
                isActive
                  ? `email-item flex justify-start items-start w-full px-2 py-4 gap-4 border-b border-gray-300 cursor-pointer text-white bg-blue-500`
                  : `email-item ${
                      item.unread ? "bg-gray-200 text-black" : ""
                    } flex justify-start items-start w-full px-2 py-4 gap-4 border-b border-gray-300 cursor-pointer text-black`
              }
            >
              <div className="w-[50px] h-[50px]">
                <img
                  src={item.from.avatarUrl}
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-5/6 flex flex-col items-start justify-between ">
                <div
                  className={`flex items-center justify-between w-full text-md text-gray-500 font-medium`}
                >
                  <p className="">{item.from.name}</p>
                  <p className="">22/6/2020</p>
                </div>
                <div>
                  <h6 class="text-md font-bold w-full line-clamp-1">
                    {item.main.title}
                  </h6>
                </div>
                <p className="email-content w-full">{item.main.content}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default EmailSummary;
