import { useParams } from "react-router-dom";
import ViewTripHero from "./ViewTripHero";

const ViewTrip = () => {
  const { tripid } = useParams();
  return (
    <div>
      <ViewTripHero />
    </div>
  );
};

export default ViewTrip;
