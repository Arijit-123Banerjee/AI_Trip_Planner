import { useEffect, useState } from "react";
import { usePlaceContext } from "@/PlaceContext";
import { AI_PROMPT } from "@/components/constant/Option";
import { chatSession } from "@/Service/AiModal";
import Loader from "@/components/Sketeton/Loader";
import { useNavigate } from "react-router-dom";

const TripPlanner = () => {
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [members, setMembers] = useState("");
  const { placeDetails } = usePlaceContext();
  const [initialLoader, setInitialLoader] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleBudgetSelect = (amount) => {
    setBudget(amount);
  };

  useEffect(() => {
    setTimeout(() => {
      setInitialLoader(false);
    }, 2000);
  }, []);

  const handleGenerateAIFunction = async () => {
    setLoading(true); // Show skeleton before generating AI response

    const FINAL_PROMPT = AI_PROMPT.replace(
      "{Location}",
      placeDetails?.result?.formatted_address
    )
      .replace("{days}", days)
      .replace("{members}", members)
      .replace("{budget}", budget);

    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);

      if (result?.response?.text()) {
        // Store the result in localStorage
        sessionStorage.setItem(
          "aiTripPlan",
          JSON.stringify(result.response.text())
        );
        sessionStorage.setItem(
          "tripDetails",
          JSON.stringify({ days, budget, members })
        );

        setLoading(false);

        navigate(`/create_trip/details/${placeDetails?.result?.place_id}`);
      }
    } catch (error) {
      console.error("Error generating AI trip plan:", error);
      setLoading(false); // Hide skeleton in case of an error
    }
  };

  if (initialLoader || loading) {
    return <Loader />;
  }

  return (
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
                d="M8.25 15a1.75 1.75 0 113.5 0v.875m-3.5 0v-.875a1.75 1.75 0 00-3.5 0v.875m3.5 0h-3.5m0 0v.875a1.75 1.75 0 003.5 0v-.875zM15.75 9a1.75 1.75 0 113.5 0v.875m-3.5 0V9a1.75 1.75 0 00-3.5 0v.875m3.5 0h-3.5m0 0v.875a1.75 1.75 0 003.5 0v-.875zM12 19.25v.875M12 19.25v-.875m0 0h.001"
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
                d="M15 11.25c0 1.519-1.231 2.75-2.75 2.75S9.5 12.769 9.5 11.25 10.731 8.5 12.25 8.5 15 9.731 15 11.25z"
              />
            </svg>
            <span>Family</span>
          </div>
        </div>
      </div>

      <button
        onClick={handleGenerateAIFunction}
        className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Generate by AI
      </button>
    </div>
  );
};

export default TripPlanner;
