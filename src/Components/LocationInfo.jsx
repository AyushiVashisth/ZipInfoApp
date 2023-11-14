// LocationInfo.js
import React from "react";

const LocationInfo = ({ location }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg text-center mb-8 max-w-[400px] w-full">
          <h2 className="text-2xl font-bold mb-4">Location Information</h2>
          <div className="flex flex-col items-center">
            <p>Country: {location.country}</p>
            <p>Abbreviation: {location.countryAbbreviation}</p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-center">
          {location.nearbyPlaces.map((place) => (
            <div
              key={place.placeName}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              {/* <img
                src={`https://source.unsplash.com/400x300/?${place.placeName}`}
                alt={place.placeName}
                className="w-full h-48 object-cover object-center rounded-t-md"
              /> */}
              <div className="p-6">
                <p className="text-2xl font-extrabold text-white mb-2">
                  {place.placeName}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {place.state}
                </p>
                <div className="justify-between items-center">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Longitude: {place.longitude}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Latitude: {place.latitude}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LocationInfo;
