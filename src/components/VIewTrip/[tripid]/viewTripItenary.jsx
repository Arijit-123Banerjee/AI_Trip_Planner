import { useState } from "react";

const ViewTripItenary = ({ itineraryList }) => {
  return (
    <div className="h-screen">
      <h2 className="font-bold text-center mt-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Your Perfect Routine
      </h2>
      {itineraryList.map((day, dayIndex) => (
        <div key={dayIndex} className="text-center p-8">
          <h1 className="text-5xl font-bold mb-10">{`Day ${day.day}`}</h1>
          {day.activities.map((activity, activityIndex) => (
            <Accordion key={activityIndex} activity={activity} />
          ))}
        </div>
      ))}
    </div>
  );
};

const Accordion = ({ activity }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-3">
      <h6 className="mb-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
        >
          <span>{activity.timeOfDay}</span>
          <i
            className={`absolute right-0 pt-1 text-xs fa ${
              isOpen ? "fa-minus" : "fa-plus"
            }`}
          ></i>
        </button>
      </h6>
      {isOpen && (
        <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
          <div className="flex flex-wrap items-center mt-10 text-left">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src={activity.placeImageUrl}
                alt={activity.placeName}
                className="inline-block rounded shadow-lg border border-merino-400"
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4">
              <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                {activity.placeName}
              </h3>
              <p className="sm:text-lg mt-6">{activity.placeDetails}</p>
              <p className="sm:text-lg mt-2">
                <strong>Time to Travel:</strong> {activity.timeToTravel}
              </p>
              <p className="sm:text-lg mt-2">
                <strong>Ticket Pricing:</strong> {activity.ticketPricing}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewTripItenary;
