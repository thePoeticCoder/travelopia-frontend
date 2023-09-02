const JourneysCard = (props : any)=>{
	const {myJourneys} = props
return (
	<div className="row mt-4">
		{myJourneys && myJourneys.map((journey : any , index : number)=>{
			return <div className="col-sm-4" key={index}>
			<div className="card mt-4">
			<div className="card-body">
				<table className="table">
					<tbody>
					
						<tr>
						<td>PhoneNu</td>
						
						<td>{journey['phoneNo']}</td>
						</tr>
						<tr>

						<td>destination</td>
						<td>{journey['destination']}</td>
						</tr>
						<tr>
						<td>startingPoint</td>
						<td>{journey['startingPoint']}</td>
						</tr>
				
					</tbody>
				</table>
				</div>
				</div>
			</div>
			})}
			
		</div>
)
}
export default JourneysCard;