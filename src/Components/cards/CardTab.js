import React, { useState } from "react";

function CardTab() {
  const [activeTab, setActiveTab] = useState("Our Mission");

  // content/onglets
  const tabContent = {
    "Our Mission":
      "Far far away, behind the word mountais, far from the countries Vokalia and Consonantia,there live the blind texts Separated they live in Bookmarkgrave right at the coast of the semantic,a large language ocean.",
    "Our Vision":
      "Far far away, behind the word mountais, far from the countries Vokalia and Consonantia",
    "Our Values":
      "Far far away, behind the word mountais, far from the countries Vokalia and Consonantia",
  };
  //   with the Onclick event I update the activeTab status when I click on a tab
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col md:flex-row gap-2">
        <div
          key="Our Mission"
          className={`flex-grow bg-yellow-400 px-7 py-2 text-center font-bold cursor-pointer md:w-auto ${
            activeTab === "Our Mission" ? " text-white" : ""
          }`}
          onClick={() => setActiveTab("Our Mission")}
        >
          Our Mission
        </div>
        <div
          key="Our Vision"
          className={`flex-grow bg-white shadow-md px-7 py-2 text-center font-bold cursor-pointer md:w-auto border${
            activeTab === "Our Vision" ? "text-black" : ""
          }`}
          onClick={() => setActiveTab("Our Vision")}
        >
          Our Vision
        </div>
        <div
          key="Our Values"
          className={`flex-grow bg-white shadow-md px-7 py-2 text-center font-bold cursor-pointer md:w-auto border ${
            activeTab === "Our Values" ? "text-black" : ""
          }`}
          onClick={() => setActiveTab("Our Values")}
        >
          Our Values
        </div>
      </div>
      {/* content text*/}
      <div className="bg-gray-100 rounded-sm p-5 px-3 mt-1 ">
        {tabContent[activeTab]}
      </div>
    </div>
  );
}

export default CardTab;
