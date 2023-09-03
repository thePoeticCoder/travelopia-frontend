import { httpGet } from "./getAPI.service";
const getAllJourneys = async ()=>{
	const url =`https://travelopia-assignment-server.onrender.com/travel/getAllData`
	const data = await httpGet(url);
	return data;
}
export default getAllJourneys;


