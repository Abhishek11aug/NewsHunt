import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <NavBar></NavBar>
        <div className="my-3">
          <Routes>
              <Route exact path="/about/" element={<About/>}/>
              <Route exact path="/" element={<News key={"G"}/>}/>
              <Route exact path="/Business" element={<News  key={"Business"}category="business"/>} />
              <Route exact path="/Entertainment" element={<News  key={"Entertainment"}category="entertainment"/>}/>
              <Route exact path="/General" element={<News  key={"General"}category="general"/>}/>
              <Route exact path="/Health" element={<News key={"Health"} category="health"/>}/> 
              <Route exact path="/Science" element={<News  key={"Science"}category="science"/>}/>
              <Route exact path="/Sports" element={<News key={"Sports"} category="sports"/>}/> 
              <Route exact path="/Technology" element={<News  key={"Technology"}category="technology"/>}/>
          </Routes>
        </div>
      </Router>
      </div>
    )
  }
}