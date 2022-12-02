import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Email = () => {
  return (
    <>
      <div className="w-[182px] flex flex-col bg-[#152943] items-center">
        <NavLink
          to="/main/email/inbox"
          className={({ isActive }) =>
            isActive
              ? "w-full flex justify-center py-4 bg-[#1d4ed8]"
              : "w-full flex justify-center py-4"
          }
        >
          Inbox
        </NavLink>
        <NavLink
          to="/main/email/sent"
          className={({ isActive }) =>
            isActive
              ? "w-full flex justify-center py-4 bg-[#1d4ed8]"
              : "w-full flex justify-center py-4"
          }
        >
          Sent
        </NavLink>
        <NavLink
          to="/main/email/reminder"
          className={({ isActive }) =>
            isActive
              ? "w-full flex justify-center py-4 bg-[#1d4ed8]"
              : "w-full flex justify-center py-4"
          }
        >
          Reminder
        </NavLink>
        <NavLink
          to="/main/email/spam"
          className={({ isActive }) =>
            isActive
              ? "w-full flex justify-center py-4 bg-[#1d4ed8]"
              : "w-full flex justify-center py-4"
          }
        >
          Spam
        </NavLink>
        <NavLink
          to="/main/email/favorite"
          className={({ isActive }) =>
            isActive
              ? "w-full flex justify-center py-4 bg-[#1d4ed8]"
              : "w-full flex justify-center py-4"
          }
        >
          Favorite
        </NavLink>
        <NavLink
          to="/main/email/junks"
          className={({ isActive }) =>
            isActive
              ? "w-full flex justify-center py-4 bg-[#1d4ed8]"
              : "w-full flex justify-center py-4"
          }
        >
          Junks
        </NavLink>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Email;
