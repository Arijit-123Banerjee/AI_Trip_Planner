import { useState, useEffect } from "react";
import Loader from "@/components/Sketeton/Loader";
import { useNavigate } from "react-router-dom";
import { usePlaceContext } from "../PlaceContext"; // Import the custom hook
import { useAuth } from "@clerk/clerk-react";

export const Create_trip = () => {
  const [loader, setLoader] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const { setPlaceDetails } = usePlaceContext();
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      const apiUrl = `https://google-place-autocomplete-and-place-info.p.rapidapi.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
        value
      )}`;

      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "x-rapidapi-host":
              "google-place-autocomplete-and-place-info.p.rapidapi.com",
            "x-rapidapi-key":
              "1eff894604msheabf59d28196e56p13a6dfjsn97a0f8c78a22",
          },
        });
        const data = await response.json();

        if (data.predictions) {
          const formattedSuggestions = data.predictions.map((prediction) => ({
            description: prediction.description,
            place_id: prediction.place_id,
          }));
          setSuggestions(formattedSuggestions);
          setIsSuggestionsVisible(true);
        } else {
          setSuggestions([]);
          setIsSuggestionsVisible(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      setSuggestions([]);
      setIsSuggestionsVisible(false);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (place_id) => {
    setSearchTerm(
      suggestions.find((suggestion) => suggestion.place_id === place_id)
        ?.description || ""
    );
    setSuggestions([]);
    setIsSuggestionsVisible(false);
    setSelectedPlaceId(place_id);
  };

  // Fetch place details based on selected place ID
  const fetchPlaceDetails = async (placeId) => {
    const apiUrl = `https://google-place-autocomplete-and-place-info.p.rapidapi.com/maps/api/place/details/json?place_id=${encodeURIComponent(
      placeId
    )}`;

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "google-place-autocomplete-and-place-info.p.rapidapi.com",
          "x-rapidapi-key":
            "1eff894604msheabf59d28196e56p13a6dfjsn97a0f8c78a22",
        },
      });
      const data = await response.json();
      setPlaceDetails(data); // Set place details in context
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Handle form submission or button click
  const handleAction = async () => {
    if (!isSignedIn) {
      // Redirect to sign-in page if the user is not signed in
      navigate("/sign-in");
      return;
    }

    if (selectedPlaceId) {
      // Fetch place details and navigate to the details page
      await fetchPlaceDetails(selectedPlaceId);
      navigate("/create_trip/details");
    } else {
      console.log("No place selected");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAction();
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:px-16 sm:shadow-sm max-w-7xl">
            <p className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Effortlessly plan and manage all your trips in one place!
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col md:flex-row items-center gap-4"
            >
              <div className="relative flex-grow">
                <label
                  className="relative bg-white flex items-center border py-2 px-4 rounded-2xl shadow-md transition-all focus-within:border-gray-300"
                  htmlFor="search-bar"
                >
                  <input
                    id="search-bar"
                    placeholder="Your keyword here"
                    name="q"
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="px-6 py-2 w-full rounded-md outline-none bg-white"
                    required
                  />
                </label>
                {isSuggestionsVisible && (
                  <ul className="absolute top-full left-0 z-10 w-full bg-white border border-gray-300 mt-2 rounded-md shadow-md max-h-48 overflow-y-auto">
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() =>
                          handleSuggestionClick(suggestion.place_id)
                        }
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      >
                        {suggestion.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button
                type="submit"
                className="w-full md:w-auto z-0 px-6 py-3 bg-black border-black text-white rounded-xl shadow-md transition-transform transform active:scale-95"
              >
                <span className="text-sm font-semibold">Search</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
