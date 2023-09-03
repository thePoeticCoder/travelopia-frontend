import React from 'react'
import { Alert } from 'react-bootstrap'

export default function SuccessAlert(props : any) {
    const {onDismiss, data} = props;
    const {name} = data;
  return (
    <div style={{paddingTop:"2rem"}}>
      <Alert variant="success" dismissible onClose={onDismiss}>
        <Alert.Heading>Hello {name}! Received your enquiry</Alert.Heading>
        <p>
          Thankyou for showing interest in planning your journey with Enchanting Travels. We have received your enquiry and our agent will contact you within 24hr to discuss furthur details.
        </p>
      </Alert>
    </div>
  )
}