import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const ResultNav = () => (
  <div className="header">
    <NavLink className="header__element" to="/result/background">受試者背景</NavLink>
    <NavLink className="header__element" to="/result/res-anlys">實驗結果分析</NavLink>
    <NavLink className="header__element" to="/result/ques-anlys">測後問卷分析</NavLink>
    <NavLink className="header__element" to="/result/conclusion">結論</NavLink>
  </div>
);

const Header = () => (
  <div>
    <div className="header">
      <NavLink className="header__home" to="/">
        <FontAwesomeIcon icon={faHome} size="2x"/>
      </NavLink>
      <NavLink className="header__element" to="/project">計劃緣起</NavLink> 
      <NavLink className="header__element" to="/method">研究方法</NavLink>
      <NavLink className="header__element" to="/result/background">現階段成果</NavLink>
      <NavLink className="header__element" to="/contact">聯絡我們</NavLink>
    </div>
    <Route path="/result" component={ResultNav}></Route>
  </div>
);

export default Header;
