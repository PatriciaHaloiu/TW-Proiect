import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/pages/Home';
import Services from './component/pages/Services';
import Announcement from './component/pages/Announcement';
import SignUp from './component/pages/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/services' component={Services} />
       <Route path='/announcement' component={Announcement} />
       <Route path='/sign-up' component={SignUp} />
     </Switch>
    </Router>
    </>
  );
}

export default App;
