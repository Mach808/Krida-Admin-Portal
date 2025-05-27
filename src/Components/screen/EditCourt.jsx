import React from 'react';
import DropdownButton from './DropdownBtn';
import { sportsData } from "../../database"; // Make sure the path is correct

const EditCourts = () => {
  return (
    <div className="w-screen h-full">
      <h1
        className="absolute top-15 ml-20 uppercase tracking-[0.15rem] text-black font-semibold"
        style={{ fontSize: "30px", lineHeight: "1.8" }}
      >
        Courts list
      </h1>
      <div className="absolute top-45 left-50 w-3xl items-center space-x-4">
        {/* Dynamically render DropdownButton for each sport */}
        {sportsData.map((sport, index) => (
          <DropdownButton
            key={index}
            sportName={sport.sportName} // Make sure sport name is correct
            courts={sport.courts} // Pass courts for this sport
          />
        ))}
      </div>
    </div>
  );
};

export default EditCourts;
