import React from 'react'
import { Spinner } from 'react-bootstrap'
import './loading.css';

export default function Loading() {
  return (
    <div className='container spinner'>
    <Spinner animation="border" />
    </div>
  )
}
