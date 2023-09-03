import { useEffect, useState } from "react";
import getAllJourneys from "../../services/getAllJourneys";
import JourneysCard from "../../components/journeys-card/journeysCard";
import Loading from "../../components/loading-component/Loading";

const AllEnquiriesPage = () => {
  const [allJourneys, SetAllJourneys] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getAllEnquiries = async() => {
    const data = await getAllJourneys();
    SetAllJourneys(data);
  }
  useEffect(()=>{
    setIsLoading(true);
    getAllEnquiries();
  },[])
  
  useEffect(()=>{
		if(allJourneys)
		setIsLoading(false);
	},[allJourneys])

  return <>
  <div style={{marginTop:"2rem",backgroundColor:"beige", textAlign:"center", border:"6px solid #719763", borderRadius:"6px"}}><h1>All Enquiries Received</h1></div>
  {!isLoading ? <JourneysCard myJourneys = {allJourneys}/> : <Loading/>}
  </>
};

export default AllEnquiriesPage;
