import React from "react";

const Card = ({
  title,
  description,
  image,
  date,
  popularity,
  arenaScore,
  pricePerMonth,
  modelUrl,
  openSource,
  paid,
  free,
  web3,
}) => {
  const renderTag = (condition, text) => {
    return (
      condition && (
        <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-indigo-500 rounded-full mr-2 mb-2">
          {text}
        </span>
      )
    );
  };

  return (
    <div className="bg-white mx-auto max-w-[320px] sm:mx-0 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl sm:hover:-translate-y-2">
      <a
        href={modelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img
            src={image.url}
            alt={image.alt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out sm:hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
          <h2 className="absolute bottom-4 left-4 text-sm font-bold text-white">
            {title}
          </h2>
        </div>
      </a>
      <div className="px-4 h-full bg-gradient-to-br from-gray-50 to-gray-100">
        <p className="text-gray-900 text-sm mb-2 md:mb-3 lg:mb-4 font-bold">
          {description}
        </p>
        <div className="mb-2 md:mb-3 lg:mb-4">
          {renderTag(!free && paid, "Paid")}
          {renderTag(free && !paid, "Free")}
          {renderTag(free && paid, "Freemium")}
          {renderTag(openSource, "Open Source")}
          {renderTag(web3, "Web 3.0")}
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4 text-xs  text-gray-600 pb-4">
          {arenaScore && (
            <div className="flex flex-col">
              <span className="text-gray-500 text-xs  ">Popularity:</span>
              <span className="text-gray-900 font-semibold">#{arenaScore}</span>
            </div>
          )}
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs ">Date Released</span>
            <span className="text-gray-900 font-semibold">{date}</span>
          </div>
          {pricePerMonth > 0 && paid && (
            <div className="flex flex-col">
              <span className="text-gray-500 text-xs  ">Price Per Month</span>
              <span className="text-gray-900 font-semibold ">${pricePerMonth}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
