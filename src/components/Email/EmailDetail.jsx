import React from "react";
import { useParams } from "react-router-dom";
import messagesData from "../../data/messages.json";

const EmailDetail = () => {
  const params = useParams();
  const idMess = params.id;
  console.log(idMess);
  const newData = [...messagesData].filter((item) => {
    return item.id === idMess;
  });
  console.log(newData);
  return (
    <div className="constructor-right p-[24px]">
      <div className="flex justify-between">
        <div className="flex gap-x-3">
          <img
            src={newData[0].from.avatarUrl}
            alt=""
            className="w-[50px] h-[50px] object-cover rounded-full"
          />
          <div className="flex flex-col">
            <h6>{newData[0].from.name}</h6>
            <span>{newData[0].from.email}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-500 font-light ">
            03:02:54, 29/6/2020
          </p>
          <div className="flex items-center justify-end gap-2">
            <button
              className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    bg-gray-500 text-white hover:bg-gray-400 false "
            >
              Reply
            </button>
            <button
              className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    border border-green-500 text-green-500 hover:bg-green-200 false "
            >
              Forward
            </button>
            <button
              className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    border border-red-500 text-red-500 hover:bg-red-200 false "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <h2 className="text-4xl font-semibold mb-8">{newData[0].main.title}</h2>
        <div class="border-b pb-8">
          <p>{newData[0].main.content}</p>
        </div>
      </div>
    </div>
  );
};

export default EmailDetail;
