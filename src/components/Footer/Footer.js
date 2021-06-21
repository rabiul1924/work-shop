import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className="container mt-5">
        <div className="row text-center text-lg-start">
          <div className="col-md-4">
           <div className="mx-2">
             <h2><span className="text-secondary">D</span><span className="text-danger">S</span><span className="text-warning">I</span></h2>
             <h2>Item 1</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, amet!</p>
             <button>Read more</button>
           </div>
          </div>
          <div className="col-md-4">
           <div>
             <img className="design" src="/item2.png" alt="" />
             <h2>Item 1</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, amet!</p>
             <button>Read more</button>
           </div>
          </div>
          <div className="col-md-4">
           <div>
             <img className="design" src="/item3.png" alt="" />
             <h2>Item 1</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, amet!</p>
             <button>Read more</button>
           </div>
          </div>
          
        </div>
        <footer className="text-center my-5">By me</footer>
      </div>
        
    );
};

export default Footer;