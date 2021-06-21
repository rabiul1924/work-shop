import React from 'react';
import { Button } from 'react-bootstrap';

import './Items.css'

const Items = () => {
    return (
        <div className="container">
        <div className="row text-center text-lg-start">
          <h4 className="text-center">Product and Service</h4>
          <div className="col-md-4 mt-3">
           <div className="mx-2">
             <img className="design" src="/item4.png" alt="" />
             <h5 className="heading-color mt-3">Our Product</h5>
             <p>Our Product is made on the base of our team's careful research and analyses, ranging from internet based application</p>
             <Button variant="danger">Read More</Button>
           </div>
          </div>
          <div className="col-md-4 mt-3">
           <div>
             <img className="design" src="/item1.png" alt="" />
             <h5 className="heading-color mt-3">Our Service</h5>
             <p>DSI's shared solutions focus on the front-end based software development,designed specifically for the banking and financial sectors.</p>
             <Button variant="danger">Read More</Button>
           </div>
          </div>
          <div className="col-md-4 mt-3">
           <div>
             <img className="design" src="/item2.png" alt="" />
             <h5 className="heading-color mt-3">Our Technology</h5>
             <p>First JAVA, runs on more than 850 million personal computer worldwide and on billion of devices worldwide including mobile and tv devices.</p>
             <Button variant="danger">Read More</Button>
           </div>
          </div>
          
        </div>
      </div>
    );
};

export default Items;