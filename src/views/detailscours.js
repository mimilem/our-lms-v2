import React, {Component} from "react";
import { Link } from 'react-router-dom';

export default class Details extends Component {

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
                <section className="courses-page-section style-two">
                    <div className="pattern-layer" style={{BackgroundImage: "url(images/background/pattern-22.png)" }}></div>
                    <div className="pattern-layer-two" style={{BackgroundImage: "url(images/background/pattern-6.png)" }}></div>
                    <div className="pattern-layer-three" style={{BackgroundImage: "url(images/background/pattern-19.png)" }}></div>
                    <div className="pattern-layer-four" style={{BackgroundImage: "url(images/background/pattern-23.png)" }}></div>
                    <div className="auto-container">
                        <div className="sec-title centered">
                            <h2>Courses</h2>
                        </div>
                        <div className="row clearfix">
                            
                            <div className="course-block-three col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link to={'/cours'}><img src="images/resource/course-30.jpg" alt="" /></Link>
                                        <div className="tag">free</div>
                                    </div>
                                    <div className="content">
                                        <h4><Link to={'/cours'}>Growth Mindsets for Teachers and Learners</Link></h4>
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
                            
                            <div className="course-block-four col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link to={'/cours'}><img src="images/resource/course-31.jpg" alt="" /></Link>
                                        <div className="tag">free</div>
                                    </div>
                                    <div className="content">
                                        <h4><Link to={'/cours'}>Java Programming Software Developers</Link></h4>
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
                            
                            <div className="course-block-four col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link to={'/cours'}><img src="images/resource/course-33.jpg" alt="" /></Link>
                                        <div className="tag">free</div>
                                    </div>
                                    <div className="content">
                                        <h4><Link to={'/cours'}>Java Programming Software Developers</Link></h4>
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
                            
                        </div>
                        
                        <div className="styled-pagination text-center">
                            <ul className="clearfix">
                                <li><a href="#">01</a></li>
                                <li><a href="#">02</a></li>
                                <li className="active"><a href="#">03</a></li>
                                <li><a href="#">04</a></li>
                                <li><a href="#">05</a></li>
                                <li className="next"><a href="#"><span className="fa fa-angle-double-right"></span> </a></li>
                            </ul>
                        </div>
                        
                    </div>
                </section>
            </>
        )
    }
}