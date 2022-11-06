import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Home from './components/Home';
import MyBlog from './components/MyBlog';
import AboutMovie from './components/AboutMovie'
import TheBestMovie from './components/The best movie'
import FavouriteFood from './components/FavouriteFood'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

export default class App extends Component {
 render() {
  
    return (
      <div className='App'>
        <Router>
        <nav>
          <Link to="/">Home</Link> &nbsp;
          <Link to="/MyBlog">MY Blog</Link> &nbsp;
          <Link to="/AboutMovie">About movie</Link> &nbsp;
          <Link to="/TheBestMovie ">The best movie</Link> &nbsp;
          <Link to="/FavouriteFood">Favourite Food</Link>
        </nav>
       {/* <Home></Home>
       <Procedures></Procedures>
       <Contact></Contact> */}
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/MyBlog" element={<MyBlog></MyBlog>}></Route>
        <Route path="/AboutMovie" element={<AboutMovie></AboutMovie>}></Route>
        <Route path="/TheBestMovie"element={<TheBestMovie/>}></Route>
        <Route path="/FavouriteFood"element={<FavouriteFood/>}></Route>
       </Routes>
       </Router>
      </div>
    )
  }
}




