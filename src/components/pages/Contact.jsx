import React from "react";
import underImage from "../../assets/images/under-construction.png";

const Contact = () => {
  return (
    <>
      <div className="w-[182px] flex flex-col bg-[#152943] items-center justify-center">
        Constructor
      </div>
      <div className="constructor-right flex justify-center px-48 py-20">
        <img src={underImage} alt="" className="w-full h-auto" />
      </div>
    </>
  );
};

export default Contact;
