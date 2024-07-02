import React from "react";

function StudentCard() {
  return (
    <div className=" flex flex-col mx-auto">
      <div className="z-0 ">
        <img
          src="logo.jpg"
          alt="Student Image"
          width={"120px"}
          className=" rounded-full border-4 border-[#07bcce] ml-28"
        />
      </div>

      <div className="p-20 pb-2 flex flex-col rounded-3xl w-82 h-64 mt-[-50px] border-4 border-[#07bcce]">
        <p>Student Name </p>
        <p>student hos name logo</p>
      </div>
    </div>
  );
}

export default StudentCard;
