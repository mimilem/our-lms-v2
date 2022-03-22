import React from "react";

export default function Header () {
    return (
            <header className="main-header header-style-two">
                
                <div className="header-upper">
                    <div className="outer-container clearfix">
                        
                        <div className="pull-left logo-box">
                            <div className="logo"><a href="index.html"><img src="images/logo-2.png" alt="" title=""/></a></div>
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
                                        <li><a href="index.html"><span data-hover="Home">Accueil</span></a>
                                        </li>
                                        <li className="dropdown"><a href="#">Type d'institution</a>
                                            <ul>
                                                <li><a href="about.html">Campus</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
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