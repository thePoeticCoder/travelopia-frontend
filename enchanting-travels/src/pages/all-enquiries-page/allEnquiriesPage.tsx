import { useEffect, useState } from "react";
import getAllJourneys from "../../services/getAllJourneys";
import JourneysCard from "../../components/journeys-card/journeysCard";

const AllEnquiriesPage = () => {
  const [allJourneys, SetAllJourneys] = useState<any>(null);

  const getAllJourneysHandel = async () => {
    useEffect(() => {
      const response = getAllJourneys();
      SetAllJourneys(response);
    }, []);
  };

  return <>{{getAllJourneysHandel} && <JourneysCard myJourneys={allJourneys} />}</>;
};

export default AllEnquiriesPage;
