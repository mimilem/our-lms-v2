import React, {Component} from "react";
import { Link } from 'react-router-dom';

class Home extends Component {

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

                <section className="banner-section-two">
                    <div className="auto-container">
                        <div className="pattern-layer-two" style={{BackgroundImage: "url(images/background/pattern-15.png)"}}></div>
                        <div className="pattern-layer-three" style={{BackgroundImage: "url(images/main-slider/icon-2.png)"}}></div>
                        <div className="row clearfix">
                        
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="pattern-layer-one" style={{BackgroundImage: "url(images/main-slider/pattern-1.png)"}}></div>
                                <div className="icon-layer-one" style={{BackgroundImage: "url(images/main-slider/icon-2.png)"}}></div>
                                <div className="icon-layer-two" style={{BackgroundImage: "url(images/main-slider/pattern-2.png)"}}></div>
                                <div className="icon-layer-three" style={{BackgroundImage: "url(images/main-slider/icon-1.png)"}}></div>
                                <div className="icon-layer-four" style={{BackgroundImage: "url(images/icons/icon-3.png)"}}></div>
                                <div className="icon-layer-five" style={{BackgroundImage: "url(images/icons/icon-4.png)"}}></div>
                                <div className="inner-column">
                                    <div className="title">Learn latest skills</div>
                                    <h1>Build skills with <br /> courses flexible online <br /> courses</h1>
                                    <div className="btns-box">
                                        <a href="about.html" className="theme-btn btn-style-one"><span className="txt">Join For free</span></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="image titlt" data-tilt data-tilt-max="4">
                                        <img src="images/main-slider/image-5.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            
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
                                        <img src="images/resource/professional.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="pattern-layer-three" style={{BackgroundImage:"url(images/background/pattern-16.png)"}}></div>
                                    <div className="sec-title">
                                        <div className="title">In Short</div>
                                        <h2>Take online courses Earn <br/> professional</h2>
                                    </div>
                                    <div className="bold-text">Position yourself for success with a variety of collegeclassNamees including general education courses</div>
                                    <p>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div className="btn-box">
                                        <Link to={'about'} className="theme-btn btn-style-four"><span className="txt">More Details</span></Link>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </section>
                
                <section className="feature-section-two">
                    <div className="background-layer-one" style={{BackgroundImage: "url(images/background/pattern-2.png)"}}></div>
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                    <div className="auto-container">
                        <div className="sec-title centered">
                            <h2>Nos tarification</h2>
                            <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur Duis aute irure dolor in reprehenderit in</div>
                        </div>
                        <div className="row clearfix">
                            
                            <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="image">
                                        <a href="course-detail.html"><img src="images/resource/course-4.jpg" alt="" /></a>
                                        <div className="tag">ENROL NOW</div>
                                    </div>
                                    <div className="lower-content">
                                        <h4><a href="course-detail.html">Growth Mindsets for Teachers and Learners</a></h4>
                                        <div className="uni-name">University of Roehampton</div>
                                        <div className="rating">
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star-o"></span>
                                            <strong>4.9</strong>
                                            <i>(70 Review)</i>
                                        </div>
                                        <div className="clearfix">
                                            <div className="price">$12 <span>$100.99</span></div>
                                            <div className="hovers">11.5 total hours . All Levels</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
                                    <div className="image">
                                        <a href="course-detail.html"><img src="images/resource/course-5.jpg" alt="" /></a>
                                        <div className="tag">ENROL NOW</div>
                                    </div>
                                    <div className="lower-content">
                                        <h4><a href="course-detail.html">Confidence and Develop Confident Bo</a></h4>
                                        <div className="uni-name">Development courses</div>
                                        <div className="rating">
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star-o"></span>
                                            <strong>4.9</strong>
                                            <i>(70 Review)</i>
                                        </div>
                                        <div className="clearfix">
                                            <div className="price">$12 <span>$100.99</span></div>
                                            <div className="hovers">11.5 total hours . All Levels</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInRight" data-wow-delay="150ms" data-wow-duration="1500ms">
                                    <div className="image">
                                        <a href="course-detail.html"><img src="images/resource/course-6.jpg" alt="" /></a>
                                        <div className="tag">ENROL NOW</div>
                                    </div>
                                    <div className="lower-content">
                                        <h4><a href="course-detail.html">Introduction to Probability and Statistics</a></h4>
                                        <div className="uni-name">University of Roehampton</div>
                                        <div className="rating">
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star-o"></span>
                                            <strong>4.9</strong>
                                            <i>(70 Review)</i>
                                        </div>
                                        <div className="clearfix">
                                            <div className="price">$12 <span>$100.99</span></div>
                                            <div className="hovers">11.5 total hours . All Levels</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="course-block style-two col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="image">
                                        <a href="course-detail.html"><img src="images/resource/course-7.jpg" alt="" /></a>
                                        <div className="tag">ENROL NOW</div>
                                    </div>
                                    <div className="lower-content">
                                        <h4><a href="course-detail.html">UX & Web Design Master Course</a></h4>
                                        <div className="uni-name">UX & Web Design</div>
                                        <div className="rating">
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star-o"></span>
                                            <strong>4.9</strong>
                                            <i>(70 Review)</i>
                                        </div>
                                        <div className="clearfix">
                                            <div className="price">$12 <span>$100.99</span></div>
                                            <div className="hovers">11.5 total hours . All Levels</div>
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

export default Home;