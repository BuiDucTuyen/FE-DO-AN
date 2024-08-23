import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search: React.FC = () => {
  return (
    <section id="timkiem" className="px-4 py-4">
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
        <div className="w-full md:w-2/3 flex flex-col gap-5 p-4 ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-left ">
            Tìm ngay dịch vụ làm việc tự do phù hợp
          </h1>
          <div className="flex items-center border border-gray-300 rounded-md p-2 md:w-[80%] ">
            <input
              type="text"
              placeholder="Tìm kiếm bất kỳ dịch vụ nào..."
              className="outline-none flex-grow "
            />
            <button className="ml-2 focus:outline-none">
              <AiOutlineSearch className="text-gray-500 h-6 w-6" />
            </button>
          </div>
          <div className="flex gap-5 items-center">
            <span>Phổ biến: </span>
            <ul className="flex flex-wrap justify-center gap-2 md:gap-5">
              {["Business", "Photography", "Programming", "Lifestyle"].map(
                (category, index) => (
                  <li
                    key={index}
                    className="border border-gray-300 rounded-2xl p-1 text-sm md:text-base"
                  >
                    {category}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <img
            src="../img/value-proposition-desktop.webp"
            alt="Value Proposition"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Search;
