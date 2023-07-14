import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';

export class App extends Component {

apikey=process.env.REACT_APP_NEWS_API="3ecd1a96f939455db8d1aadffaad1a1c"
  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" key={'general'} element={<News pagesize={5} apikey={this.apikey} country={'in'} category={'general'} />} />
              <Route exact path="/business" key={'business'} element={<News pagesize={5} apikey={this.apikey} country={'in'} category={'business'} />} />
              <Route exact path="/entertainment" key={'entertainment'} element={<News pagesize={5} apikey={this.apikey} country={'in'} category={'entertainment'} />} />
              <Route exact path="/general" key={'general2'} element={<News pagesize={5} apikey={this.apikey} country={'in'} category={'general'} />} />
              <Route exact path="/health" key={'health'} element={<News pagesize={5} apikey={this.apikey} country={'in'} category={'health'} />} />
              <Route exact path="/science" key={'science'} element={<News pagesize={5} apikey={this.apikey} country={'in'} category={'science'} />} />
              <Route exact path="/sports" key={'sports'} element={<News pagesize={5} apikey={this.apikey} country={'in'} category={'sports'} />} />
              <Route exact path="/technology" key={'technology'} element={<News pagesize={5} apikey={this.apikey} country={'in'} category={'technology'} />} />
            </Routes>
          </Router>
        </div>
      </>
    )
  }
}

export default App;