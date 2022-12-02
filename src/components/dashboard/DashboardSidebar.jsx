import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logoWhite from "../../assets/images/connect-logo-white.svg";
import { FaHome } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
const DashboardSidebar = ({ setUser }) => {
  console.log(setUser);
  const location = useLocation();
  const pathName = location.pathname;
  console.log(pathName);
  function handleLogOut() {
    setUser(false);
  }
  return (
    <div>
      <div className=" text-black h-[56px] flex items-center">
        <div className="w-[228px] bg-[#0e1f33] h-[56px] border-b-2 border-[#0e1f33]">
          <img src={logoWhite} alt="" className="w-3/4 h-5/6" />
        </div>
        <div className="constructor-right flex justify-between items-center px-2 border-b-2">
          <h6 className="">
            Pathname: <span className="font-bold">{pathName}</span>
          </h6>
          <div className="flex items-center gap-x-2">
            <div className="name-info flex flex-col ">
              <span>Jonathan Kyle</span>
              <span>test1@test.com</span>
            </div>
            <img
              src="https://i.pravatar.cc/320?img=65"
              alt=""
              className="w-[50px] h-[50px] object-cover rounded-full"
            />
            <button
              className="px-2 py-2 rounded-full bg-red-500 text-white hover:bg-opacity-30"
              onClick={handleLogOut}
            >
              <FaPowerOff></FaPowerOff>
            </button>
          </div>
        </div>
      </div>
      <div className="container-part flex text-white w-full">
        <div className="w-[46px] flex flex-col bg-[#0e1f33] items-center text-xl">
          <NavLink
            to="/main/home"
            className={({ isActive }) =>
              isActive
                ? "w-full flex justify-center py-4 text-2xl bg-[#1d4ed8]"
                : "w-full flex justify-center py-4 text-2xl"
            }
          >
            <FaHome></FaHome>
          </NavLink>
          <NavLink
            to="/main/email"
            className={({ isActive }) =>
              isActive
                ? "w-full flex justify-center py-4 text-2xl bg-[#1d4ed8]"
                : "w-full flex justify-center py-4 text-2xl"
            }
          >
            <FaFacebookMessenger></FaFacebookMessenger>
          </NavLink>
          <NavLink
            to="/main/contact"
            className={({ isActive }) =>
              isActive
                ? "w-full flex justify-center py-4 text-2xl bg-[#1d4ed8]"
                : "w-full flex justify-center py-4 text-2xl"
            }
          >
            <FaUserAlt></FaUserAlt>
          </NavLink>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardSidebar;
