// actions.js
import axios from "axios";
import * as actionTypes from "./actionTypes";

const fetchLocationRequest = () => {
  return {
    type: actionTypes.FETCH_LOCATION_REQUEST
  };
};

const fetchLocationSuccess = (location) => {
  return {
    type: actionTypes.FETCH_LOCATION_SUCCESS,
    payload: location
  };
};

const fetchLocationFailure = (error) => {
  return {
    type: actionTypes.FETCH_LOCATION_FAILURE,
    payload: error
  };
};

export const clearLocation = () => {
  return {
    type: actionTypes.CLEAR_LOCATION,
  };
};

export const fetchLocation = (zipCode) => {
  return async (dispatch) => {
    dispatch(fetchLocationRequest());

    try {
      const response = await axios.get(
        `https://api.zippopotam.us/in/${zipCode}`
      );

      const location = {
        country: response.data.country,
        countryAbbreviation: response.data["country abbreviation"],
        nearbyPlaces: response.data.places.slice(0).map((place) => ({
          placeName: place["place name"],
          state: place["state"],
          longitude: place["longitude"],
          latitude: place["latitude"]
        }))
      };

      dispatch(fetchLocationSuccess(location));
    } catch (error) {
      dispatch(
        fetchLocationFailure("Error fetching location. Please try again.")
      );
    }
  };
};
