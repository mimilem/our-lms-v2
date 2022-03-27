import React, {Component} from "react";
import { Link } from 'react-router-dom';

class Fees extends Component {

    render() {
        return(
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
                        <div className="content-box">
                            <h2>Fees</h2>
                            <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Duis aute irure dolor in reprehenderit in </div>
                        </div>
                    </div>
                </section>
                <section className="professional-section">
                    <div className="background-layer-one" style={{BackgroundImage: "url(images/background/pattern-5.png)"}}></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                            
                            <div className="images-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="pattern-layer" style={{BackgroundImage: "url(images/background/pattern-3.png)"}}></div>
                                    <div className="pattern-layer-two" style={{BackgroundImage: "url(images/background/pattern-4.png)"}}></div>
                                    <div className="color-layer"></div>
                                    <div className="color-layer-two"></div>
                                    <div className="image wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="image">
                                            <img src="images/resource/contact.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="pattern-layer-three" style={{BackgroundImage:"url(images/background/pattern-16.png)"}}></div>
                                    <div className="sec-title">
                                        <div className="title">Fees</div>
                                        <h2>More about our <br/> Fees</h2>
                                    </div>
                                    <div className="bold-text"><p>recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> </div>
                                    <div className="btn-box">
                                        <Link to={'/'} className="theme-btn btn-style-four"><span className="txt">Download</span></Link>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </section>
                
            </>
        )
    }
}

export default Fees;