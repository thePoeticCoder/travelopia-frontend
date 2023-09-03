import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Featured() {
    let navigate = useNavigate(); 
    const createMyJourney=()=>{
        navigate("/create-journey");
    }
  return (
    <div className="row" style={{paddingTop : "3rem"}}>
	<div className='col-4' >
	<Card>
	 <Card.Header style={{backgroundColor : "rgb(205 119 96)"}}>Featured</Card.Header>
	 <Card.Body style={{backgroundColor : "#efdbae"}}>
	   <Card.Title>Special Offers</Card.Title>
	   <Card.Text>
		 Our site is running special offers on selected Destinations
	   </Card.Text>
	   <Button variant="primary">Go somewhere</Button>
	 </Card.Body>
   </Card>
   </div>
   <div className='col-4' >
	<Card>
	 <Card.Header style={{backgroundColor : "rgb(205 119 96)"}}>Featured</Card.Header>
	 <Card.Body style={{backgroundColor : "#efdbae"}}>
	   <Card.Title>Customize on go</Card.Title>
	   <Card.Text>
		 You can create your own customize Journey on our website 
	   </Card.Text>
	   <Button onClick={createMyJourney} variant="primary">Customize journey</Button>
	 </Card.Body>
   </Card>
   </div>
   <div className='col-4'>
	<Card>
	 <Card.Header style={{backgroundColor : "rgb(205 119 96)"}}>Featured</Card.Header>
	 <Card.Body style={{backgroundColor : "#efdbae"}}>
	   <Card.Title>Explore curated plans</Card.Title>
	   <Card.Text>
		 Our website provide you affordable curated plans for your family and friends vacation need.
	   </Card.Text>
	   <Button variant="primary">Explore plans</Button>
	 </Card.Body>
   </Card>
   </div>
   </div>
  )
}
