import React from "react";

const Loading = () => {
  return (
    <div className="w-full flex-center h-full">
      <div style={{ width: `42px`, height: `42px` }} className="animate-spin">
        <div
          className="h-full w-full border-4 border-t-cyan-400
       border-b-cyan-600 rounded-[50%]"
        ></div>
      </div>
    </div>
  );
};

export default Loading;
