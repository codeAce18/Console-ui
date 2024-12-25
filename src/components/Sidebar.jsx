import React from "react";
import ActivateCloudIcon from "../assets/ActivateCloudIcon.svg";
import sectionsNavigation from "../data/sectionsnavigation.js";

const Sidebar = ({
  activeSection,
  setActiveSection,
  activeCategory,
  setActiveCategory,
}) => {
  const sections = Object.values(sectionsNavigation.sections).map(
    (section) => section.name
  );

  const categoriesForActiveSection =
    Object.values(sectionsNavigation.sections).find(
      (section) => section.name === activeSection
    )?.categories || [];

  return (
    <div className="max-w-[277px] w-full border-r h-full flex flex-col">
      <div className="flex items-center gap-[20px] px-[20px] border-b-[1px] py-[5px] sticky top-0 bg-white z-10">
        <div className="cursor-pointer">
          <img
            width={30}
            height={30}
            src={ActivateCloudIcon}
            alt="ActivateCloudIcon"
          />
        </div>
        <h1 className="text-[20px] leading-[39px] text-[#707070] font-medium">
          Solutions
        </h1>
      </div>

      <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
        <div className="px-[10px] py-[5px] space-y-[20px]">
          <div className="pt-[10px] space-y-[10px]">
            {sections.map((section) => (
              <div
                key={section}
                className={`cursor-pointer py-2 px-2 rounded ${
                  activeSection === section
                    ? "bg-blue-100 text-blue-600 border-l-[5px] border-blue-600"
                    : "text-[#707070] hover:bg-gray-200"
                }`}
                onClick={() => setActiveSection(section)}
              >
                <h1 className="text-[14px] leading-[21px] font-medium">
                  {section}
                </h1>
              </div>
            ))}
          </div>

          <div>
            <h1 className="text-[16px] text-[#707070] font-bold">Categories</h1>
          </div>

          {categoriesForActiveSection.map((category) => (
            <div
              key={category}
              className={`cursor-pointer py-1 px-2 rounded ${
                activeCategory === category ? " text-blue-600" : "text-[#707070]"
              } ${
                category === "Other Google products"
                  ? "border-b-[1px] pb-[20px]"
                  : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              <h1 className="text-[14px] leading-[21px] font-normal">
                {category}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
