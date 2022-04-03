import React, {Component} from "react";

export default class Cours extends Component {

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

                <section className="cource-detail-banner-section">
                    <div className="pattern-layer-one" style={{BackgroundImage:" url(images/icons/icon-5.png)" }}></div>
                    <div className="pattern-layer-two" style={{BackgroundImage:" url(images/icons/icon-6.png)" }}></div>
                    <div className="pattern-layer-three" style={{BackgroundImage:" url(images/icons/icon-4.png)" }}></div>
                    <div className="pattern-layer-four" style={{BackgroundImage:" url(images/icons/icon-8.png)" }}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h2>The Complete JavaScript Course 2020 <br /> From Zero to Expert!</h2>
                            <ul className="course-info">
                                <li><span className="icon fa fa-clock-o"></span>Last Update : November 23, 2020</li>
                                <li><span className="icon fa fa-language"></span>English</li>
                                <li><span className="icon fa fa-user"></span>749 students</li>
                            </ul>
                            <div className="hovers">11.5 total hours . All Levels  </div>
                            <ul className="social-box">
                                <span className="fa fa-share-alt"></span>
                                <li className="twitter"><a target="_blank" href="http://twitter.com/" className="fa fa-twitter"></a></li>
                                <li className="pinterest"><a target="_blank" href="http://pinterest.com/" className="fa fa-pinterest-p"></a></li>
                                <li className="facebook"><a target="_blank" href="http://facebook.com/" className="fa fa-facebook-f"></a></li>
                                <li className="dribbble"><a target="_blank" href="http://dribbble.com/" className="fa fa-dribbble"></a></li>
                            </ul>
                            
                        </div>
                    </div>
                </section>

                <section className="course-detail-section">
                    <div className="auto-container">
                        <div className="row clearfix">
                            
                            <div className="content-column col-lg-8 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <h5>Courses Description</h5>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                                    <div className="learn-box">
                                        <h5>What you'll learn</h5>
                                        <ul className="learn-list">
                                            <li>JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, etc.</li>
                                            <li>Become job-ready by understanding how JavaScript really works behind the scenes</li>
                                            <li>Modern ES6+ from the beginning: arrow functions, destructuring, spread operator, optional chaining (ES2020), etc.</li>
                                            <li>Modern tools for 2020 and beyond: NPM, Parcel, Babel and ES6 modules</li>
                                            <li>Modern ES6+ from the beginning: arrow functions, destructuring, spread operator, optional chaining (ES2020), etc.</li>
                                            <li>Modern ES6+ from the beginning: arrow functions, destructuring, spread operator, optional chaining (ES2020), etc.</li>
                                        </ul>
                                    </div>
                                    <h5>Requirements</h5>
                                    <ul className="learn-list-two">
                                        <li>Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada Cum sociis natoque penatibus et magnis </li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                                        <li>JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, etc.</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="info-column col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="price">$9.99 <i>$129.99</i> <span>92% of</span></div>
                                    <h5>This course includes:</h5>
                                    <div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered </div>
                                    <ul className="level-list">
                                        <li>Level :<span>Beginner</span></li>
                                        <li>Topic :<span>Java Script</span></li>
                                        <li>className :<span>32 articles</span></li>
                                        <li>Access :<span>Mobile and TV</span></li>
                                    </ul>
                                    <h5>Other includes:</h5>
                                    <ul className="level-list-two">
                                        <li>Full lifetime access</li>
                                        <li>19 downloadable resources</li>
                                        <li>Certificate of completion</li>
                                    </ul>
                                    <div className="btns-box">
                                        <a href="#" className="theme-btn enrol-btn">Enrol Now</a>
                                        <a href="#" className="theme-btn wishlist-btn">Add to wishlist</a>
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