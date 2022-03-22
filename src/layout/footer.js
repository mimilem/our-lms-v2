import React from "react";

export default function Footer () {
    return (
        <footer className="main-footer">
            <div className="circle-layer"></div>
            <div className="pattern-layer-one" style={{BackgroundImage: "url(images/background/pattern-12.png)"}}></div>
            <div className="pattern-layer-two" style={{BackgroundImage: "url(images/background/pattern-13.png)"}}></div>
            <div className="pattern-layer-three" style={{BackgroundImage: "url(images/background/pattern-14.png)"}}></div>
            <div className="pattern-layer-four" style={{BackgroundImage: "url(images/background/pattern-13.png)"}}></div>
            <div className="auto-container">
                <div className="widgets-section">
                    <div className="row clearfix">
                        
                        <div className="footer-column col-lg-5 col-md-12 col-sm-12">
                            <div className="footer-widget logo-widget">
                                <div className="logo">
                                    <a href="index.html"><img src="images/logo.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="footer-column col-lg-7 col-md-12 col-sm-12">
                            <div className="row clearfix">
                                <div className="column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget logo-widget">
                                        <ul className="info-list">
                                            <li>Tel:<a href="tel:+0845-371-02-02"> 0845 371 02 02</a></li>
                                            <li>Email:<a href="http://themazine.com/cdn-cgi/l/email-protection#234a4d454c635a4c5651504a57460d404c0d5648"> <span className="__cf_email__" data-cfemail="452c2b232a053c2a3037362c31206b262a6b302e">[email&#160;protected]</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget logo-widget">
                                        <ul className="social-box">
                                            <li className="twitter"><a target="_blank" href="http://twitter.com/" className="fa fa-twitter"></a></li>
                                            <li className="pinterest"><a target="_blank" href="http://pinterest.com/" className="fa fa-pinterest-p"></a></li>
                                            <li className="facebook"><a target="_blank" href="http://facebook.com/" className="fa fa-facebook-f"></a></li>
                                            <li className="dribbble"><a target="_blank" href="http://dribbble.com/" className="fa fa-dribbble"></a></li>
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="row clearfix">
                        
                        <div className="copyright-column col-lg-6 col-md-12 col-sm-12">
                            <div className="copyright">Copyright 2020, All Right Reserved</div>
                        </div>
                        
                        <div className="nav-column col-lg-6 col-md-12 col-sm-12">
                            <ul>
                                <li><a href="about.html">SiteMap</a></li>
                                <li><a href="about.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </footer>
    )
}