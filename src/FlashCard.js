import React from "react";
import {Button, Card} from "semantic-ui-react";


const FlashCard = ({ id, subject, notes}) => {
  return (
    <div> 
      <Card>
        <Card.Content>
          <Card.Header>{subject}</Card.Header>
          <Card.Description>{notes}</Card.Description>
          {/* <Card.Description>
          <Button onClick={() => ()}> Delete </Button>
          </Card.Description> */}
        </Card.Content>
      </Card>
    </div>
  )
};

export default FlashCard;


