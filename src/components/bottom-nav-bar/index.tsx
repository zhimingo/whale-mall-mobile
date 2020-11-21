import React from 'react';

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

function BottomNavBar() {
  return (
    <div className="bottom-nav-bar">
      <div className="bottom-nav-bar-item">
        <img src={Home} alt="home" />
        <div>首页</div>
      </div>
      <div className="bottom-nav-bar-item">
        <img src={More} alt="home" />
        <div>分类</div>
      </div>
      <div className="bottom-nav-bar-item">
        <img src={Explore} alt="home" />
        <div>探索</div>
      </div>
      <div className="bottom-nav-bar-item">
        <img src={ShoppingCart} alt="home" />
        <div>购物车</div>
      </div>
      <div className="bottom-nav-bar-item">
        <img src={My} alt="home" />
        <div>我的</div>
      </div>
    </div>
  );
}

export default BottomNavBar;
