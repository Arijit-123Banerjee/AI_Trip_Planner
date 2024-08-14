import { usePlaceContext } from "@/PlaceContext";
import { Badge } from "@/components/ui/badge";

const ViewTripHero = () => {
  const { placeDetails } = usePlaceContext();

  const tripData = sessionStorage.getItem("tripDetails");
  const {
    days = "N/A",
    budget = "N/A",
    members = "N/A",
  } = tripData ? JSON.parse(tripData) : {};

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-5xl mt-20 font-bold max-md:text-4xl">
        {placeDetails?.result?.formatted_address}
      </h1>
      <div className="flex gap-5 max-md:gap-2 mt-4">
        <Badge variant="outline" className="text-lg max-md:text-sm">
          {`Days: ${days}`}
        </Badge>
        <Badge variant="outline" className="text-lg max-md:text-sm">
          {`Budget: ${budget}`}
        </Badge>
        <Badge variant="outline" className="text-lg max-md:text-sm">
          {`Members: ${members}`}
        </Badge>
      </div>
    </div>
  );
};

export default ViewTripHero;
