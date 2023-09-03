import React from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from '../../assets/images/travelImg1.jpeg'
import img2 from '../../assets/images/travel2.png'
import img3 from '../../assets/images/travelImg3.jpeg'

export default function ImgSlides() {
  return (
    <Carousel data-bs-theme="dark" style={{border:"2px solid beige"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
		  height={400}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Explore Enchanting Travels</h5>
          <p>For all your travel needs, We are here to take care for all.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
		  height={400}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Planning for a family vacation</h5>
          <p>Brace yourself for adventure</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
		  height={400}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Travel further. Travel longer. Travel deeper.</h5>
          <p>
		  Making life the daring adventure you deserve
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
