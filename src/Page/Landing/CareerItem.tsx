import React from "react";

const categories = [
  { name: "Business", icon: "../svg/business.fabc3a7.svg" },
  { name: "Data", icon: "../svg/data.855fe95.svg" },
  { name: "Graphics & Design", icon: "../svg/graphics-design.91dfe44.svg" },
  { name: "Lifestyle", icon: "../svg/lifestyle.112b348.svg" },
  { name: "Music & Audio", icon: "../svg/music-audio.ede4c90.svg" },
  { name: "Online & Marketing", icon: "../svg/online-marketing.a3e9794.svg" },
  { name: "Photography", icon: "../svg/photography.0cf5a3f.svg" },
  { name: "Programming", icon: "../svg/programming.6ee5a90.svg" },
  { name: "Video & Animation", icon: "../svg/video-animation.1356999.svg" },
  {
    name: "Writing & Translation",
    icon: "../svg/writing-translation.a787f2f.svg",
  },
];

const CategoriesList = () => {
  return (
    <div id="chungtoico" className="w-full gap-10 px-4 py-4">
      <h1 className="text-[40px] text-center">CHÚNG TÔI CÓ !</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-[50px]">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 hover:brightness-150"
          >
            <img
              src={category.icon}
              alt={category.name}
              className="w-12 h-12 mr-2"
            />
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
