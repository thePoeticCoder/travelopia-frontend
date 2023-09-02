import { httpGet } from "./getAPI.service";
const getAllJourneys = async ()=>{
	const url =`https://travelopia-assignment-server.onrender.com/travel/getAllData`
	return  await  httpGet(url);
}
export default getAllJourneys;


