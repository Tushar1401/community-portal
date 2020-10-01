import React from 'react';
import './App.css';
import Home  from './Components/Home';
import HomeClg  from './Components/HomeClg';
import HomeBsn  from './Components/HomeBsn';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
        {/* <Home /> */}
        {/* <HomeClg /> */}
        {/* <HomeBsn /> */}
       {/* <Footer /> */}

       <Router>
         {/* <Home /> */}
         {/* <HomeClg /> */}
         <HomeBsn />
         <Footer />
      </Router>
    </div>
  );
}

export default App;