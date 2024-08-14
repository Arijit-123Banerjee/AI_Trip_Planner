/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

// Create a Context
const TripPlanContext = createContext();

// Create a Provider component
export const TripPlanProvider = ({ children }) => {
  const [tripPlan, setTripPlan] = useState(null);

  return (
    <TripPlanContext.Provider value={{ tripPlan, setTripPlan }}>
      {children}
    </TripPlanContext.Provider>
  );
};

// Custom hook to use the TripPlan context
export const useTripPlan = () => useContext(TripPlanContext);
