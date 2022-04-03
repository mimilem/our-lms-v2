import React, { Component } from 'react';
import './App.css';
import Header from './layout/header';
import Footer from './layout/footer';
import { Route, Routes } from "react-router-dom";
import Home from './views/home';
import Campus from './views/campus';
import Contact from './views/contact';
import Event from './views/event';
import Notice from './views/notice';
import Fees from './views/fees';
import Calender from './views/calender';
import Library from './views/library';
import ShortCours from './views/shortcourses';
import Details from './views/detailscours';
import Cours from './views/cours';


class App extends Component {
  render () {
    return (
      <div className="page-wrapper">
        <div className="preloader"></div>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/campus' element={<Campus />} />
          <Route path='/shortcours' element={<ShortCours />} />
          <Route path='/details' element={<Details />} />
          <Route path='/cours' element={<Cours />} />
          <Route path='/about' element={<Contact />} />
          <Route path='/event' element={<Event />} />
          <Route path='/notice' element={<Notice />} />
          <Route path='/fees' element={<Fees />} />
          <Route path='/calender' element={<Calender />} />
          <Route path='/library' element={<Library />} />
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
