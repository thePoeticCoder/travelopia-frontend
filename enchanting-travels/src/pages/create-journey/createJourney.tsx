import submitJourney from "../../services/submitJourney";

const CreateJourney = ()=>{

	const createMyJourney = (e : React.FormEvent<HTMLFormElement>)=>{
		e.preventDefault();
		const data = new FormData((e as any).target);
		const formObj =  Object.fromEntries((data as any).entries());
		const payload ={
    		"phoneNo":formObj['phoneNumber'],
			"startingPoint" : formObj['startingPoint'],
			"destination": formObj['destination'],
			"totalTravellers": formObj['totalTravellers'],
			"Budget":formObj['budget'],
			"rating":formObj['ratings']
		}
		submitJourney(payload);

	}
	return (
	<>
<form onSubmit={createMyJourney}>
  <div className="form-group">
    <label htmlFor="phoneNumber">Enter phone number</label>
    <input type="tel" className="form-control" name="phoneNumber" placeholder="e.g. 6454758908"/>
  </div>
  <div className="form-group">
    <label htmlFor="startingPoint">Enter starting point</label>
    <input type="text" className="form-control" name="startingPoint" placeholder="e.g. new Delhi"/>
  </div>
  <div className="form-group">
    <label htmlFor="destination">Enter destination</label>
    <input type="text" className="form-control" name="destination" placeholder="e.g. Pune"/>
  </div>
  <div className="form-group">
    <label htmlFor="totalTravellers">Enter number of people</label>
    <input type="number" className="form-control" name="totalTravellers" placeholder="e.g. 4"/>
  </div>
  <div className="form-group">
    <label htmlFor="budget">Enter your budget</label>
    <input type="number" className="form-control" name="budget" placeholder="e.g. 40000"/>
  </div>
  <div className="form-group">
    <label htmlFor="ratings">Enter ratings (1-5)</label>
    <input type="number" className="form-control" name="ratings" placeholder="e.g. 4"/>
  </div>
  <div className="form-group">
    <label htmlFor="specialRequest">Enter special request</label>
    <textarea className="form-control" name="specialRequest" rows={3}></textarea>
  </div>
  <button type="submit" className="btn btn-primary mt-3">Create journey</button>
</form>
	</>)
}

export default CreateJourney;