import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header';
import FirstPage from './Components/FirstPage/FirstPage';
import BookingPage from './Components/BookingPage/BookingPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route path="/results/:searchQuery/:startDate/:endDate" component={BookingPage} />
      </Switch>
    </div>
  );
}

export default App;
