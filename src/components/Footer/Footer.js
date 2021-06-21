import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className="container mt-5">
        <div className="row text-center text-lg-start">
          <div className="col-md-4">
           <div className="mx-2">
             <h2><span className="text-secondary">D</span><span className="text-danger">S</span><span className="text-warning">I</span></h2>
             <h5>Pt Dwidasa Samsara Indonesia</h5>
            <h6 className="footer-text">Ruko jalur,Sutera 29A no.53</h6>
            <h6 className="footer-text">Alam Sutera Serpong, Tangerang 15323</h6>
           </div>
          </div>
          <div className="col-md-4">
           <div>
             <h2>Contact</h2>
             <h6 className="footer-text">Phone:+880-1873368144</h6>
             <h6 className="footer-text">Fax:+89799898989</h6>
             <h6 className="footer-text">rabiulrabiul1924@gmail.com</h6>
           </div>
          </div>
          <div className="col-md-4">
           <div>
             <img className="footer-img m-2" src="/partner1.jpg" alt="" />
             <img className="footer-img m-2" src="/partner2.jpg" alt="" />
             <img className="footer-img m-2" src="/partner3.png" alt="" />
             <br />
             <img className="footer-img m-2" src="/partner4.png" alt="" />
             <img className="footer-img m-2" src="/partner5.png" alt="" />
             <img className="footer-img m-2" src="/partner6.png" alt="" />
             
           </div>
          </div>
          
        </div>
        <footer className="text-center footer-color my-3">Copyright@ 2021 by Rabiul</footer>
      </div>
        
    );
};

export default Footer;