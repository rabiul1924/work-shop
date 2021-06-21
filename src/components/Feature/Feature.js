import React from 'react';
import './Feature.css'

const Feature = () => {
    return (
        <section className="features-service  pb-0 pb-md-5 my-5">
        <div className="container mb-5 background">
            <div className="row mb-5 text-center text-lg-start">
                <div className="col-md-6 mb-4 m-md-0 d-flex justify-content-center">
                    <img className="img-fluid" src="/feature1.svg" alt=""/>
                </div>
                <div className="col-md-6 align-self-center">
                   <h3>Welcome to <span className="color">Dwidasa Samsara</span></h3>
                   <h3 className="color">Indonesia(DSI)</h3>
                   <p>Dwidasa Samsara Indonesia(DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creation technology through <span className="color">DSI</span>'s distinct front-end based application concept.</p>
                   <p>Managed by a team of Professional experts with extensive experience and impressive track records,<span className="color">DSI</span> believes that continuous imporvements and innovations assure your business to run effectively and efficiently.</p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Feature;