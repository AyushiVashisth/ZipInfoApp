// ZipInput.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearLocation, fetchLocation } from "../Redux/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LocationInfo from "./LocationInfo";

import bg from "../assets/bg.jpg"

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

    if (zipCode.length !== 6 || isNaN(zipCode)) {
      toast.error("Zip code must be a 6-digit number");
      return;
    }

    dispatch(fetchLocation(zipCode));
  };

  const handleClear = () => {
    dispatch(clearLocation());
    setZipCode("");
    toast.error("clear location");
  };

  return (
    <div
      className="relative bg-cover bg-center bg-fixed opacity-80 min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[70%] lg:w-[50%] mx-auto bg-black bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg p-4 mb-8 flex flex-col md:flex-row items-center justify-center z-1"
        
      >
        <input
          type="number"
          value={zipCode}
          placeholder="Enter Zip Code"
          className={`w-full md:w-[70%] bg-gray-500 text-white p-3 rounded-t-md md:rounded-l-md md:rounded-t-none ${
            error ? "border-red-500" : "border-gray-700"
          }`}
          onChange={handleZipCodeChange}
        />
        <button
          type="submit"
          className="bg-[#4c545f] text-white font-bold py-3 px-6 rounded mt-2 md:mt-0 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Search
        </button>
      </form>
      <div className="text-white">
        {loading ? (
          <div className="flex items-center justify-center mb-4">
            <div className="animate-spin h-16 w-16 border-t-4 border-blue-800 rounded-full"></div>
          </div>
        ) : (
          <>
            {error ? (
              <p className="text-red-500 border-2 p-6 bg-black bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg w-auto text-center mb-8 ">
                {error}
              </p>
            ) : (
              location && <LocationInfo location={location}/>
            )}
          </>
        )}
      </div>
      {(location || error) && (
        <button
          type="button"
          className="text-white font-bold ml-2 p-3 rounded bg-[#4c545f] transition duration-300 ease-in-out transform hover:scale-105 z-2 mt-10"
          onClick={handleClear}
        >
          Clear
        </button>
      )}
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ZipInput;
