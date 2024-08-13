/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const PlaceContext = createContext();

export const PlaceProvider = ({ children }) => {
  const [placeDetails, setPlaceDetails] = useState(null);

  return (
    <PlaceContext.Provider value={{ placeDetails, setPlaceDetails }}>
      {children}
    </PlaceContext.Provider>
  );
};

// Custom hook for using context
export const usePlaceContext = () => useContext(PlaceContext);
