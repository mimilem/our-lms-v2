import React, {Component} from "react";
import { Link } from 'react-router-dom';

export default class Library extends Component {

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
                            <h2>Library</h2>
                            <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Duis aute irure dolor in reprehenderit in </div>
                        </div>
                    </div>
                </section>
                <section className="team-section-two">
                    <div className="auto-container">
                        <div className="pattern-layer" style={{BackgroundImage: "url(images/background/pattern-18.png)" }}></div>
                        <div className="pattern-layer-two" style={{BackgroundImage: "url(images/background/pattern-19.png)" }}></div>
                        <div className="pattern-layer-three" style={{BackgroundImage: "url(images/icons/icon-4.png)" }}></div>
                        <div className="pattern-layer-four" style={{BackgroundImage: "url(images/icons/icon-4.png)" }}></div>
                        <div className="inner-container">
                            <div className="pattern-layer-five" style={{BackgroundImage: "url(images/icons/icon-2.png)" }}></div>
                            <div className="color-layer"></div>
                            <div className="row clearfix">
                                
                                
                                <div className="team-block col-lg-4 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <a href="#"><img src="images/resource/team-3.jpg" alt="" /></a>
                                        </div>
                                        <div className="lower-content">
                                            <h5><a href="#">Mahfuz Riad</a></h5>
                                            <div className="designation">- Designer, themeforest</div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div className="team-block col-lg-4 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <a href="#"><img src="images/resource/team-1.jpg" alt="" /></a>
                                        </div>
                                        <div className="lower-content">
                                            <h5><a href="#">Mahfuz Riad</a></h5>
                                            <div className="designation">- Designer, themeforest</div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div className="team-block col-lg-4 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image">
                                            <a href="#"><img src="images/resource/team-2.jpg" alt="" /></a>
                                        </div>
                                        <div className="lower-content">
                                            <h5><a href="#">Tamim megh</a></h5>
                                            <div className="designation">- Designer, themeforest</div>
                                        </div>
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