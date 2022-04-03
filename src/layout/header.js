import React from "react";
import { Link } from "react-router-dom";

export default function Header () {
    return (
        <header className="main-header header-style-two">
                
                <div className="header-upper">
                    <div className="outer-container clearfix">
                        
                        <div className="pull-left logo-box">
                            <div className="logo"><Link to='/'><img src="images/logo-2.png" alt="" title=""/></Link></div>
                        </div>
                        
                        <div className="nav-outer clearfix">
                            <div className="mobile-nav-toggler"><span className="icon flaticon-menu"></span></div>
                            <nav className="main-menu navbar-expand-md">
                                <div className="navbar-header">	
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                
                                <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                        <li className="dropdown"><Link to='/'><span data-hover="Home">Home</span></Link>
                                        </li>
                                        <li>
                                            <Link to='/about'>About</Link>
                                        </li>
                                        <li className="dropdown has-mega-menu"><a href="#"><span>Campuses <i className="fa fa-arrow-down"></i></span></a>
                                            <div className="mega-menu">
                                                <div className="upper-box">
                                                    <div className="page-links-box">
                                                        <Link to='/campus' className="link"><span className="icon flaticon-bullhorn"></span>Marketing</Link>
                                                        <Link to='/campus' className="link"><span className="icon flaticon-cyclist"></span>Lifestyle</Link>
                                                        <Link to='/campus' className="link"><span className="icon flaticon-bar-chart"></span>Business</Link>
                                                        <Link to='/campus' className="link"><span className="icon flaticon-software"></span>Software</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to='/shortcours'>Short Courses</Link>
                                        </li>
                                        <li>
                                            <Link to='/calender'>Calendar</Link>
                                        </li>
                                        <li>
                                            <Link to='/fees'>Fees</Link>
                                        </li>
                                        <li>
                                            <Link to='/notice'>Notices</Link>
                                        </li>
                                        <li>
                                            <Link to='/event'>Events</Link>
                                        </li>
                                        <li>
                                            <Link to='/library'>Libraries</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div className="outer-box clearfix">   
                                <div className="nav-btn navSidebar-button"><span className="icon flaticon-menu-4 mx-2"></span></div>
                                <div className="cart-box">
                                    <div className="dropdown">
                                        <button className="cart-box-btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="flaticon-shopping-bag-1"></span><span className="total-cart">2</span></button>
                                        <div className="dropdown-menu pull-right cart-panel" aria-labelledby="dropdownMenu1">

                                            <div className="cart-product">
                                                <div className="inner">
                                                    <div className="cross-icon"><span className="icon fa fa-remove"></span></div>
                                                    <div className="image"><img src="images/resource/post-thumb-1.jpg" alt="" /></div>
                                                    <h3><a href="shop-single.html">Product 01</a></h3>
                                                    <div className="quantity-text">Quantity 1</div>
                                                    <div className="price">$99.00</div>
                                                </div>
                                            </div>
                                            <div className="cart-total">Sub Total: <span>$198</span></div>
                                            <ul className="btns-boxed">
                                                <li><a href="shoping-cart.html">View Cart</a></li>
                                                <li><a href="checkout.html">CheckOut</a></li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="sticky-header">
                    <div className="auto-container clearfix">
                        <div className="logo pull-left">
                            <a href="index.html" title=""><img src="images/logo.png" alt="" title="" /></a>
                        </div>
                        <div className="pull-right">
                            <nav className="main-menu">
                            </nav>
                            <div className="outer-box clearfix">
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="mobile-menu">
                    <div className="menu-backdrop"></div>
                    <div className="close-btn"><span className="icon flaticon-multiply"></span></div>
                    
                    <nav className="menu-box">
                        <div className="nav-logo"><a href="index.html"><img src="images/logo.png" alt="" title="" /></a></div>
                        <div className="menu-outer"></div>
                    </nav>
                </div>
            
        </header>
    )
}