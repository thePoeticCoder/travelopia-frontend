import { useEffect, useState } from "react";
import getMyPrevJourneys from "../../services/getJourney";
import './previousJourney.css'
import JourneysCard from "../../components/journeys-card/journeysCard";
import Loading from "../../components/loading-component/Loading";

const PreviousJourneys = ()=>{
	const [myJourneys , setMyJourneys] = useState<any>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	useEffect(()=>{
		if(myJourneys)
		setIsLoading(false);
	},[myJourneys])

	const getMyJourneys = async (e : React.FormEvent<HTMLFormElement>)=>{
		e.preventDefault();
		setIsLoading(true);
		const data = new FormData((e as any).target);
		const formObj =  Object.fromEntries((data as any).entries());
		const phoneNo = formObj['phoneNumber'];
		console.log("pages",phoneNo);
		const response =  await getMyPrevJourneys(phoneNo);
		setMyJourneys(response);
	}

	return (<>
	<div style={{marginTop:"2rem",marginBottom:"2rem",backgroundColor:"beige", textAlign:"center", border:"6px solid #719763", borderRadius:"6px"}}><h1>Your previous journeys</h1></div>
	<form onSubmit={getMyJourneys}>
	<div className="form-group">
		<label htmlFor="phoneNumber">Enter registered phone number</label>
		<input type="tel" className="form-control" name="phoneNumber" aria-describedby="emailHelp" placeholder="(e.g. 4637473249)"/>
	</div>
  	<button type="submit" className="btn btn-primary mt-3">Submit</button>
	</form>


	{isLoading ? <Loading/> : <JourneysCard myJourneys = {myJourneys}/> }
	</>)
}

export default PreviousJourneys;