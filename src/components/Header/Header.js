import React from 'react';
import './header.css'

const Header = () => {
    return (
        <section className="header-service pb-0 pb-md-5 my-5">
        <div className="container mb-5">
            <div className="row mb-5 text-center text-lg-start">
            <div className="col-md-6 align-self-center order-2 order-lg-1">
                    <h1>Making the most of the</h1>
                    <h1>ever-growing</h1>
                    <h4 className="text-color">
                   Information Technology
                    </h4>
                    <p>Manage by a team of professional experts with extensive experience and impressive records.</p>
                    <button className="btn btn-danger">Read More</button>
                </div>
                <div className="col-md-6 mb-4 m-md-0 d-flex justify-content-center order-1 order-lg-2">
                    <img className="img-fluid" src="/header.svg" alt=""/>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Header;