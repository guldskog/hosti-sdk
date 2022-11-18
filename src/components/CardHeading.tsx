import React from "react";

export interface CardHeadingProps {}

export const CardHeading: React.FC<CardHeadingProps> = (props) => {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Apps</h3>
        </div>
        <div className="ml-4 mt-2 flex-shrink-0">
          <button
            type="button"
            onClick={() => {
              location.href = "https://github.com/guldskog/hosti-sdk";
            }}
            className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none"
          >
            Contribute
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardHeading;
