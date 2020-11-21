import React from 'react';
import { BottomNavBar } from './components';
import { Home, Explore, Classification, Mine, ShoppingCart } from './pages';

import './App.scss';

function App() {
  return (
    <div className="app">
      {/* <Home />
      <Explore />
      <Classification />
      <Mine />
      <ShoppingCart /> */}
      <div className="app-content"></div>
      <BottomNavBar />
    </div>
  );
}

export default App;
