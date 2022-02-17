import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import NavLink from './pages/NavLink';
import Home from './pages/Home';
import About from './pages/About';
import Calculator from './components/calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <NavLink />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Calculator" element={<Calculator />} />

        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
