import React, {Component} from "react";

class Contact extends Component {
    render() {
        return (
            <>
                <section className="contact-banner-section">
                    <div className="pattern-layer-one" style={{BackgroundImage: "url(images/icons/icon-5.png)"}}></div>
                    <div className="pattern-layer-two" style={{BackgroundImage: "url(images/icons/icon-6.png)"}}></div>
                    <div className="pattern-layer-three" style={{BackgroundImage: "url(images/icons/icon-4.png)"}}></div>
                    <div className="auto-container">
                        <ul className="page-breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li>Contact</li>
                        </ul>
                        <div className="content-box">
                            <h2>Nous contacter</h2>
                            <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Duis aute irure dolor in reprehenderit in </div>
                        </div>
                    </div>
                </section>
                
                <section className="contact-page-section">
                    <div className="pattern-layer-three" style={{BackgroundImage: "url(images/icons/icon-8.png)"}}></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                            
                            <div className="info-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="title">GET IN TOUCH</div>
                                    <h2>Visit one of our agency locations <br/> or contact us today</h2>
                                    <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </div>
                                    
                                </div>
                            </div>
                            
                            <div className="info-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <ul>
                                        <li><span>Address</span>56 Glassford Street Glasgow G1 1UL New York</li>
                                        <li><span>Our Phone</span>Telephone : 028577101<br/>Mobile : 01781648101</li>
                                        <li><span>Our Email</span>Telephone : 028577101<br/>Mobile : 01781648101</li>
                                        <li><span>Opening Hours</span>Monday to Saturday: 9.00am to 16.pm</li>
                                    </ul>
                                        
                                </div>
                                    
                            </div>
                        </div>
                            
                    </div>
                </section>
            </>
        )
    }
}

export default Contact;