import React from 'react'
import Card from 'react-bootstrap/Card'

const post =(props)=>{
    
    return(
        <Card bg="success" text="white" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Success Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default post