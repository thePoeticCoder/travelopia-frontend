import { httpGet } from "./getAPI.service";

const getMyPrevJourneys = async (payload : any)=>{

	console.log("service",payload);
	const url =`https://travelopia-assignment-server.onrender.com/travel/getTravelInfo?phoneNo=${payload}`
	console.log("url,url",url);

	const data = await  httpGet(url)
	return data;
	
}
export default getMyPrevJourneys;


