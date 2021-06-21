import React from 'react';

import './Items.css'

const Items = () => {
    return (
        <div className="container">
        <div className="row text-center text-lg-start">
          <div className="col-md-4">
           <div className="mx-2">
             <img className="design" src="/item4.png" alt="" />
             <h2>Item 1</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, amet!</p>
             <button>Read more</button>
           </div>
          </div>
          <div className="col-md-4">
           <div>
             <img className="design" src="/item1.png" alt="" />
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
          
        </div>
      </div>
    );
};

export default Items;