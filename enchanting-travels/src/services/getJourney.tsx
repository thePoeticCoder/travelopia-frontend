import { httpGet } from "./getAPI.service";

const getMyPrevJourneys = async (payload : any)=>{
	const url =`https://travelopia-assignment-server.onrender.com/travel/getTravelInfo?phoneNo=${payload}`;
	const data = await httpGet(url)
	return data;
	
}
export default getMyPrevJourneys;


