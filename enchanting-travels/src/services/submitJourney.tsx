import { httpPost } from "./getAPI.service";


const submitJourney = async(payload : any)=>{
	 return await httpPost("https://travelopia-assignment-server.onrender.com/travel/createTravelInfo",payload)
}
export default submitJourney;