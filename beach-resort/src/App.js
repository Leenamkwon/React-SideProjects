import React from 'react';
import './App.css';
/* Router */
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* COMMON Components */
import Navbar from './components/Navbar';

/* Page Components */
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms' component={Rooms} />
        <Route path='/rooms/:rooms?' component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
