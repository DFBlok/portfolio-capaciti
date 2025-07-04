import React from "react";

const ExperineceCard = ({
  image,
  title,
  company,
  location,
  period,
  type,
  description,
}: any) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-6 items-start mb-6">
      <div className="flex-shrink-0 w-24 h-24">
        <img
          src={image}
          alt={`${company} logo`}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex-1">
        <h6 className="text-xl font-semibold mb-1 text-gray-800">{title}</h6>
        <p className="text-sm text-gray-500 mb-2">
          {company} | {location} | {period}
        </p>
        <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mb-3">
          {type}
        </span>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ExperineceCard;
