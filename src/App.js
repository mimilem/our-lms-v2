import React, { Component } from 'react';
import './App.css';
import Header from './layout/header';
import Footer from './layout/footer';
import { Route, Routes } from "react-router-dom";
import Home from './views/home';
import Campus from './views/campus';
import Contact from './views/contact';


class App extends Component {
  render () {
    return (
      <>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/campus' element={<Campus />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
