import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classnames from 'classnames';
import { BottomNavBar } from './components';
import { Home, Explore, Classification, Mine, ShoppingCart } from './pages';

import './App.scss';

function App() {
  const pages = [<Home />, <Explore />, <Classification />, <Mine />, <ShoppingCart />];
  const [currentPage, setCurrentPage] = useState(0);
  const onPageChange = (index: number) => {
    setCurrentPage(index);
  };
  return (
    <div className="app">
      <div className="app-content">
        {pages.map((item, index) => {
          const appContentItemClass = classnames('app-content-item', {
            'app-content-item-current': index === currentPage,
          });
          return (
            <div className={appContentItemClass} key={uuidv4()}>
              {item}
            </div>
          );
        })}
      </div>
      <BottomNavBar onCurrentChange={onPageChange} />
    </div>
  );
}

export default App;
