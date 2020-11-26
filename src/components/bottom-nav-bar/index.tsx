import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './index.scss';
import Home from '../../assets/icons/home.png';
import HomeFill from '../../assets/icons/home_fill.png';
import More from '../../assets/icons/more.png';
import MoreFill from '../../assets/icons/more_fill.png';
import My from '../../assets/icons/my.png';
import MyFill from '../../assets/icons/my_fill.png';
import ShoppingCart from '../../assets/icons/shopping_cart.png';
import ShoppingCartFill from '../../assets/icons/shopping_cart_fill.png';
import Explore from '../../assets/icons/explore.png';
import ExploreFill from '../../assets/icons/explore_fill.png';

const barItems = [
  {
    defaultIcon: Home,
    activeIcon: HomeFill,
    title: '首页',
  },
  {
    defaultIcon: More,
    activeIcon: MoreFill,
    title: '分类',
  },
  {
    defaultIcon: Explore,
    activeIcon: ExploreFill,
    title: '探索',
  },
  {
    defaultIcon: ShoppingCart,
    activeIcon: ShoppingCartFill,
    title: '购物车',
  },
  {
    defaultIcon: My,
    activeIcon: MyFill,
    title: '我的',
  },
];

interface BottomNavBarProps {}

const BottomNavBar: React.FC<BottomNavBarProps> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const onBarItemClick = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="bottom-nav-bar">
      {barItems.map((item, index) => (
        <div className="bottom-nav-bar-item" key={uuidv4()} onClick={() => onBarItemClick(index)}>
          <img src={index === currentIndex ? item.activeIcon : item.defaultIcon} alt={item.title} />
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  );
};

BottomNavBar.defaultProps = {};

export default BottomNavBar;
