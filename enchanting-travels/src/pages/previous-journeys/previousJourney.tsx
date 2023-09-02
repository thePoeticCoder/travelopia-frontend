import { useEffect, useState } from "react";
import getMyPrevJourneys from "../../services/getJourney";
import './previousJourney.css'
import JourneysCard from "../../components/journeys-card/journeysCard";

const PreviousJourneys = ()=>{
	const [myJourneys , setMyJourneys] = useState<any>(null);

	const getMyJourneys = async (e : React.FormEvent<HTMLFormElement>)=>{
		e.preventDefault();
		const data = new FormData((e as any).target);
		const formObj =  Object.fromEntries((data as any).entries());
		const phoneNo = formObj['phoneNumber'];
		console.log("pages",phoneNo);
		const response =  await getMyPrevJourneys(phoneNo);
		setMyJourneys(response);
	}

	return (<>
	<form onSubmit={getMyJourneys}>
	<div className="form-group">
		<label htmlFor="phoneNumber">Enter registered phone number</label>
		<input type="tel" className="form-control" name="phoneNumber" aria-describedby="emailHelp" placeholder="(e.g. 4637473249)"/>
	</div>
  	<button type="submit" className="btn btn-primary">Submit</button>
	</form>


	<JourneysCard myJourneys = {myJourneys}/>

	</>)
}

export default PreviousJourneys;