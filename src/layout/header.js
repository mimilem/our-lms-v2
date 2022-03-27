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
                                        <li>
                                            <Link to='/campus'>Campus</Link>
                                        </li>
                                        <li>
                                            <Link to='/calender'>Calender</Link>
                                        </li>
                                        <li>
                                            <Link to='/fees'>Fees</Link>
                                        </li>
                                        <li>
                                            <Link to='/notice'>Notice</Link>
                                        </li>
                                        <li>
                                            <Link to='/event'>Event</Link>
                                        </li>
                                        <li>
                                            <Link to='/library'>Library</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            
                            <div className="outer-box clearfix">
                                <div className="nav-btn navSidebar-button"><span className="icon flaticon-menu-4"></span></div>
                                    
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