import React from 'react'
import { Button, Card } from 'react-bootstrap'
import img1 from '../../assets/images/review1.jpeg'
import img2 from '../../assets/images/review2.jpeg';
import img3 from '../../assets/images/review3.jpeg';
import img4 from '../../assets/images/review4.jpeg';
import StarRatingIcon from '../star-rating/starRatingIcon';


export default function CustomerReviews() {
  return (<div style={{paddingTop:"3rem"}}>
    <div className='row' style={{border:"10px solid #719763", borderRadius:"10px",height:"100px",backgroundColor:"beige", textAlign: "center"}}>
      <h1 className='display-4 font-italic' style={{fontWeight:"500"}}>Customer reviews</h1>
    </div>
    <div className='row my-4'>
    <div className='col-3'>
    <Card style={{ width: '18rem',height:"100%"  }}>
      <Card.Img variant="top" src={img1} height={200} />
      <Card.Body>
        <Card.Title>Anne</Card.Title>
        <Card.Text>
          I have booked my travel for the first time from Enchanting Travels and they didn't disappoint.
          <div style={{display:"flex"}}>
        <StarRatingIcon rating={5}/>
        </div>
        </Card.Text>
      </Card.Body>
    </Card>
        </div> 
        <div className='col-3'>
    <Card style={{ width: '18rem',height:"100%"  }}>
      <Card.Img variant="top" src={img2} height={200}/>
      <Card.Body>
        <Card.Title>Suzzane</Card.Title>
        <Card.Text>
          The trip was planned so smoothly that we are able to enjoy to the fullest. Thankyou team Enchanting travels.
          <div style={{display:"flex"}}>
        <StarRatingIcon rating={4}/>
        </div>
        </Card.Text>
      </Card.Body>
    </Card>
        </div> 
        <div className='col-3'>
    <Card style={{ width: '18rem', height:"100%" }}>
      <Card.Img variant="top" src={img3} height={200} />
      <Card.Body>
        <Card.Title>Nick</Card.Title>
        <Card.Text>
          The enchanting team has taken care of all our bookings so well. Looking forward to use their service again.
          <div style={{display:"flex"}}>
        <StarRatingIcon rating={3}/>
        </div>
        </Card.Text>
      </Card.Body>
    </Card>
        </div> 
        <div className='col-3'>
    <Card style={{ width: '18rem', height:"100%" }}>
      <Card.Img variant="top" src={img4} height={200} />
      <Card.Body>
        <Card.Title>Alex</Card.Title>
        <Card.Text>
          One of the best travel agency. Everything was planned properly
          <div style={{display:"flex"}}>
        <StarRatingIcon rating={4}/>
        </div>
        </Card.Text>
      </Card.Body>
    </Card>
        </div>  
    </div>
    </div>
  )
}
