import React from "react";

const PressFeatures = () => {
  return (
    <section id="truyenthong" className="px-4 py-10 w-full gap-8 ">
      <h1 className="text-[40px] text-center">TRUYỀN THÔNG</h1>
      <div className="flex flex-wrap justify-center items-center max-w-[70%] mx-auto mt-[50px]">
        <img
          className="w-1/2 sm:w-auto sm:mr-4 mb-4"
          src="../img/cna.png"
          alt=""
        />
        <img
          className="w-1/2 sm:w-auto sm:mr-4 mb-4"
          src="../img/techcrunch.png"
          alt=""
        />
        <img
          className="w-1/2 sm:w-auto sm:mr-4 mb-4"
          src="../img/yahoo.png"
          alt=""
        />
        <img
          className="w-1/2 sm:w-auto mb-4"
          src="../img/business-times.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default PressFeatures;
