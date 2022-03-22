import React, {Component} from "react";

class Contact extends Component {
    render() {
        return (
            <>
                <div className="xs-sidebar-group info-group">
                    <div className="xs-overlay xs-bg-black"></div>
                    <div className="xs-sidebar-widget">
                        <div className="sidebar-widget-container">
                            <div className="widget-heading">
                                <a href="#" className="close-side-widget">
                                    X
                                </a>
                            </div>
                            <div className="sidebar-textwidget">
                                
                                <div className="sidebar-info-contents">
                                    <div className="content-inner">
                                        <div className="logo">
                                            <a href="index.html"><img src="images/logo-2.png" alt="" /></a>
                                        </div>
                                        <div className="content-box">
                                            <h2>About Us</h2>
                                            <p className="text">The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.</p>
                                            <a href="#" className="theme-btn btn-style-two"><span className="txt">Se connecter</span></a>
                                        </div>
                                        <ul className="social-box">
                                            <li className="facebook"><a href="#" className="fa fa-facebook-f"></a></li>
                                            <li className="twitter"><a href="#" className="fa fa-twitter"></a></li>
                                            <li className="linkedin"><a href="#" className="fa fa-linkedin"></a></li>
                                            <li className="instagram"><a href="#" className="fa fa-instagram"></a></li>
                                            <li className="youtube"><a href="#" className="fa fa-youtube"></a></li>
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
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