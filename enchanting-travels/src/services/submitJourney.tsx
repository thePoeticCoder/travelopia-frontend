import { httpPost } from "./getAPI.service";


const submitJourney = (payload : any)=>{
	 httpPost("https://travelopia-assignment-server.onrender.com/travel/createTravelInfo",payload)
}
export default submitJourney;