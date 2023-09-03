import React from 'react'
import { FaStar } from 'react-icons/fa';

export default function tarRatingIcon(props : any) {
    const {rating} = props;
    const createElements = (number: number) => {
        var elements = [];
        
        for(let i =0; i < number; i++){
            elements.push(<FaStar size={20} style={{color : "#ffc107"}}/>);
        }
        return elements;
    }

  return (
    
    <>{rating && createElements(rating)}</>
  )
}
