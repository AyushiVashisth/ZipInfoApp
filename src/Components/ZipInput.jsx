// ZipInput.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearLocation, fetchLocation } from "../Redux/actions";

const ZipInput = () => {
  const [zipCode, setZipCode] = useState("");
  const dispatch = useDispatch();
  const { location, loading, error } = useSelector((state) => state);

  const handleZipCodeChange = (e) => {
    const value = e.target.value;
    setZipCode(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLocation(zipCode));
  };

  const handleClear = () => {
    dispatch(clearLocation());
    setZipCode('');
  };

  return (
    <div
      className="bg-cover bg-center bg-fixed min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          'url("https://lh6.googleusercontent.com/proxy/eMYodMBG9Y4Zdv75nne3ivEntNwvKjngXnRLvnlkRu8vWEYMiKFDw6zmc0KncRrM8WWdAxhoAuRSZsfAPxU=w1200-h630-p-k-no-nu")'
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[70%] lg:w-[50%] mx-auto bg-black bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg p-8 mb-8 flex flex-col md:flex-row items-center justify-between"
      >
        <input
          type="text"
          value={zipCode}
          placeholder="Enter Zip Code"
          className={`w-full md:w-[70%] bg-gray-800 text-white p-3 rounded-t-md md:rounded-l-md md:rounded-t-none ${
            error ? "border-red-500" : "border-gray-700"
          }`}
          onChange={handleZipCodeChange}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-b-md md:rounded-r-md md:rounded-b-none mt-2 md:mt-0 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Search
        </button>
      </form>
      <div className="text-white w-full md:w-[70%] lg:w-[30%]">
        {loading ? (
          <div className="flex items-center justify-center mb-4">
          <div className="animate-spin h-16 w-16 border-t-4 border-blue-800 rounded-full"></div>
        </div>
          ) : (
          <>
            {error ? (
              <p className="text-red-500 border-2 p-6 bg-black bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg w-auto text-center mb-8 ">{error}</p>
            ) : (
              location && (
                <>
                  <div className="border-2 p-6 bg-black bg-opacity-70 backdrop-blur-lg rounded-lg shadow-lg w-auto text-center mb-8 ">
                    <h2 className="text-2xl font-bold mb-4">
                      Location Information
                    </h2>
                    <div className="flex flex-col items-center">
                      <p>Country: {location.country}</p>
                      <p>Abbreviation: {location.countryAbbreviation}</p>
                    </div>
                  </div>
                  <div className="w-full flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                      {location.nearbyPlaces.map((place) => (
                        <div
                          key={place.placeName}
                          className="border-2 text-center bg-black bg-opacity-70 backdrop-blur-lg rounded-lg shadow-lg"
                        >
                          <p className="text-xl font-bold mt-4">{place.placeName}</p>
                          <p>{place.state}</p>
                          <p>Longitude: {place.longitude}</p>
                          <p>Latitude: {place.latitude}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )
            )}
          </>
        )}
      </div>
      <button
        type="button"
        className="border-2 text-white border-red-500 ml-2 p-3 rounded bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  );
};

export default ZipInput;
