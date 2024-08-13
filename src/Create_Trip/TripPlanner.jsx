import { useEffect, useState } from "react";
import { usePlaceContext } from "@/PlaceContext";
import { AI_PROMPT } from "@/components/constant/Option";
import { chatSession } from "@/Service/AiModal";
import Loader from "@/components/Sketeton/Loader";

const TripPlanner = () => {
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [members, setMembers] = useState("");
  const { placeDetails } = usePlaceContext();
  const [loader, setLoader] = useState(true);

  const handleBudgetSelect = (amount) => {
    setBudget(amount);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  });

  const handleGenerateAIFunction = async () => {
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{Location}",
      placeDetails?.result?.formatted_address
    )
      .replace("{days}", days)
      .replace("{members}", members)
      .replace("{budget}", budget);

    console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text());
  };

  return loader ? (
    <Loader />
  ) : (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">AI Trip Planner</h1>

      {/* Number of Days */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Number of Days</label>
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          placeholder="Enter number of days"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Budget */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Budget</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            onClick={() => handleBudgetSelect("$1000")}
            className={`p-4 border rounded-lg flex items-center cursor-pointer ${
              budget === "$1000" ? "bg-blue-100 border-blue-500" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6 2H3m12-6V6l-3-3m0 0H6l-3 3"
              />
            </svg>
            <span>$1000</span>
          </div>
          <div
            onClick={() => handleBudgetSelect("$5000")}
            className={`p-4 border rounded-lg flex items-center cursor-pointer ${
              budget === "$5000" ? "bg-blue-100 border-blue-500" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6 2H3m12-6V6l-3-3m0 0H6l-3 3"
              />
            </svg>
            <span>$5000</span>
          </div>
        </div>
      </div>

      {/* Number of Members */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Number of Members
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div
            onClick={() => setMembers("Solo")}
            className={`p-4 border rounded-lg flex flex-col items-center cursor-pointer ${
              members === "Solo" ? "bg-blue-100 border-blue-500" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c0-2.485 2.015-4.5 4.5-4.5S21 8.515 21 11c0 2.485-2.015 4.5-4.5 4.5S12 13.485 12 11z"
              />
            </svg>
            <span>Solo</span>
          </div>
          <div
            onClick={() => setMembers("Couple")}
            className={`p-4 border rounded-lg flex flex-col items-center cursor-pointer ${
              members === "Couple" ? "bg-blue-100 border-blue-500" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 13.5c2.485 0 4.5 2.015 4.5 4.5S18.985 22.5 16.5 22.5c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5z"
              />
            </svg>
            <span>Couple</span>
          </div>
          <div
            onClick={() => setMembers("Friends")}
            className={`p-4 border rounded-lg flex flex-col items-center cursor-pointer ${
              members === "Friends" ? "bg-blue-100 border-blue-500" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15a1.75 1.75 0 113.5 0v.875m-3.5 0v-.875a1.75 1.75 0 00-3.5 0v.875m3.5 0h-3.5m0 0v.875a1.75 1.75 0 003.5 0v-.875zM15.75 9a1.75 1.75 0 113.5 0v.875m-3.5 0V9a1.75 1.75 0 00-3.5 0v.875m3.5 0h-3.5m0 0v.875a1.75 1.75 0 003.5 0v-.875zM12 19.25v.875M12 8.25v.875M7.5 12v.875M16.5 12v.875"
              />
            </svg>
            <span>Friends</span>
          </div>
          <div
            onClick={() => setMembers("Family")}
            className={`p-4 border rounded-lg flex flex-col items-center cursor-pointer ${
              members === "Family" ? "bg-blue-100 border-blue-500" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 10c0-2.21 1.79-4 4-4s4 1.79 4 4v2c0 1.1-.9 2-2 2h-8a2 2 0 01-2-2v-2z"
              />
            </svg>
            <span>Family</span>
          </div>
        </div>
      </div>

      {/* Generate by AI Button */}
      <button
        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 mt-4"
        onClick={handleGenerateAIFunction}
      >
        Generate by AI
      </button>
    </div>
  );
};

export default TripPlanner;
