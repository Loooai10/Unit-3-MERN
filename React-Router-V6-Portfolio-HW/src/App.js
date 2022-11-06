import logo from './logo.svg';
import './App.css';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Skills from './components/Skills';
import Profile from './components/Profile';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
//import all of your components to use them


//Guide: In your App.js return below: 
// return (
//   <div className="App">
  //Put your nav bar first with <Link> components
  //Put your <Route> components after
//   </div>
// );


function App() {
  return (
    <div className="App">
          <Router>
        <nav>
          <Link to="/">About</Link> &nbsp;
          <Link to="/ContactMe">ContactMe</Link> &nbsp;
          <Link to="/Login">Login</Link> &nbsp;
          <Link to="/Profile">Profile</Link> &nbsp;
          <Link to="/SignUP">SignUP</Link> &nbsp;
          <Link to="/Skills">Skills</Link>
        </nav>
       {/* <Home></Home>
       <Procedures></Procedures>
       <Contact></Contact> */}
       <Routes>
        <Route path="/" element={<About/>}></Route>
        <Route path="/Login" element={<Login procedures={procedArray}></Login>}></Route>
        <Route path="/ContactME" element={<ContactMe></ContactMe>}></Route>
        <Route path="/SignUP" element={<SignUp></SignUp>}></Route>
        <Route path="/Profile" element={<Profile></Profile>}></Route>
        <Route path="/Skills" element={<Skills></Skills>}></Route>
       </Routes>
       </Router>
    </div>
  );
}

export default App;
