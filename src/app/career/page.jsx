import React from "react";
import { MdWorkOff } from "react-icons/md";

const page = () => {
  return (
    <center>
      <div className="flex flex-col items-center justify-center py-12">
        <MdWorkOff size={48} className="text-gray-400 mb-4" />
        <h2 className="text-xl font-semibold text-gray-700">
          No Job Posts Available
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          We're not hiring at the moment. Please check back later.
        </p>
      </div>
    </center>
  );
};

export default page;
