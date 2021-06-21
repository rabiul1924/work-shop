import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';

const Items = () => {
    return (
        <div className="container">
        <CardGroup>
        <Card className="m-2">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary">Go somewhere</Button>
          </Card.Footer>
        </Card>
        <Card className="m-2">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary">Go somewhere</Button>
          </Card.Footer>
        </Card>
        <Card className="m-2">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary">Go somewhere</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
      </div>
    );
};

export default Items;