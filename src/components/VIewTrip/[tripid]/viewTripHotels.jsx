import { useEffect, useState } from "react";
import { useTripPlan } from "@/components/TripPlanProvider";
import ViewTripItenary from "./ViewTripItenary";

const ViewTripHotels = () => {
  const { tripPlan } = useTripPlan();
  const data = JSON.parse(tripPlan);
  const [hotels, setHotels] = useState([]);
  const [itinerary, setItinerary] = useState([]);

  useEffect(() => {
    setHotels(data?.hotels);
    setItinerary(data?.itinerary);
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-10 mt-10 justify-center">
        {hotels.map((values, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-white shadow-2xl rounded-xl w-full max-w-xs md:max-w-sm lg:max-w-md"
          >
            <div className="relative h-56 overflow-hidden text-gray-500 bg-blue-gray-500 rounded-t-xl">
              <img
                src={values?.hotelImageUrl}
                alt="Hotel Photos"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">
                {values?.hotelName}
              </h5>
              <p className="text-base font-light text-inherit">
                {values?.description}
              </p>
              <p>{values?.hotelAddress}</p>
              <p className="mt-2 text-green-500 font-bold">{values?.price}</p>
              <p>{`Rating: ${values?.rating}`}</p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="w-[50%] text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg focus:opacity-85 active:opacity-85"
                type="button"
              >
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <ViewTripItenary itineraryList={itinerary} />
    </>
  );
};

export default ViewTripHotels;
