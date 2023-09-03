import submitJourney from "../../services/submitJourney";
import img1 from '../../assets/images/travelImg1.jpeg';
import img3 from '../../assets/images/travelImg3.jpeg';
import SuccessAlert from "../../components/success-alert/successAlert";
import { useEffect, useState } from "react";

const CreateJourney = ()=>{
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitResponse, setSubmitResponse] = useState<any>(null);

  useEffect(() => {
    if(submitResponse)
    setSubmitSuccess(true);
  }, [submitResponse])

  const createMyJourney = async(e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const data = new FormData((e as any).target);
    const formObj =  Object.fromEntries((data as any).entries());
    const payload ={
        "name":formObj['name'],
        "phoneNo":formObj['phoneNumber'],
      "startingPoint" : formObj['startingPoint'],
      "destination": formObj['destination'],
      "totalTravellers": formObj['totalTravellers'],
      "Budget":formObj['budget'],
      "rating":formObj['ratings']
    }
    const response = await submitJourney(payload);
    setSubmitResponse(response);
  }

  const onDismissSuccessAlert = ()=>{
    setSubmitSuccess(false);
  }
  return (
  <>
  {submitSuccess && <SuccessAlert onDismiss={onDismissSuccessAlert} data={submitResponse}/>}
  <div className="row">
  <div className="my-4 col-md-6">
  <form onSubmit={createMyJourney}>
  <div className="form-group my-3">
    <label htmlFor="name">Enter your name</label>
    <input type="text" className="form-control" name="name" placeholder="e.g. Paras Jain"/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="phoneNumber">Enter phone number</label>
    <input type="tel" className="form-control" name="phoneNumber" placeholder="e.g. 6454758908"/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="startingPoint">Enter starting point</label>
    <input type="text" className="form-control" name="startingPoint" placeholder="e.g. new Delhi"/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="destination">Enter destination</label>
    <input type="text" className="form-control" name="destination" placeholder="e.g. Pune"/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="totalTravellers">Enter number of people</label>
    <input type="number" className="form-control" name="totalTravellers" placeholder="e.g. 4"/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="budget">Enter your budget</label>
    <input type="number" className="form-control" name="budget" placeholder="e.g. 40000"/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="ratings">Enter ratings (1-5)</label>
    <select className="form-control" name="ratings">
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
    </select>
  </div>
  <div className="form-group my-3">
    <label htmlFor="specialRequest">Enter special request</label>
    <textarea className="form-control" name="specialRequest" rows={3}></textarea>
  </div>
  <button type="submit" className="btn btn-primary mt-3">Create journey</button>
</form>
  </div>
  <div className="my-4 col-md-6">
  <div className="jumbotron">
  <img src={img1} alt=""/>
  <h1 className="display-4">Hello, Traveller!</h1>
  <p className="lead">We have come up with customize plans to relieve you from all booking tension. You have to just pack your bag and book your seemless journey with us.</p>
  <hr className="my-4"/>
  <p>Once you specified your needs by filling this form, our agent will call you within 24hrs to discuss your bookings.</p>
</div>
    <div className="col"><img src={img3} alt=""/></div>
  </div>
  </div>
  </>)
}

export default CreateJourney;