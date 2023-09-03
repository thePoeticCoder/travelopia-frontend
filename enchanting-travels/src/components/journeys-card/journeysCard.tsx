const JourneysCard = (props : any)=>{
	const {myJourneys} = props;
return (
	<div className="row mt-4">
		{myJourneys && myJourneys.map((journey : any , index : number)=>{
			return <div className="col-sm-4" key={index}>
			<div className="card mt-4" style={{backgroundColor : "beige"}}>
			<div className="card-body">
				<table className="table">
					<tbody>					
						<tr>
						<td>Phone Number</td>
						<td>{journey['phoneNo']}</td>
						</tr>
						<tr>
						<td>startingPoint</td>
						<td>{journey['startingPoint']}</td>
						</tr>
						<tr>
						<td>Destination</td>
						<td>{journey['destination']}</td>
						</tr>
						<tr>
						<td>Number of people</td>
						<td>{journey['totalTravellers']}</td>
						</tr>
					</tbody>
				</table>
				<div style={{display:"flex"}}>
				<div style={{padding : "2px"}}>
    			<button type="button" className="btn btn-primary">See details</button>
				</div>
				<div style={{padding : "2px"}}>
    			<button type="button" className="btn btn-primary">Resolved</button>
				</div>
				</div>
				</div>
				</div>
			</div>
			})}
			
		</div>
)
}
export default JourneysCard;