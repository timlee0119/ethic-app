import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const ResultNav = () => (
  <div className="header">
    <NavLink className="header__btn" activeClassName="header__btn--active" to="/result/background">受試者背景</NavLink>
    <NavLink className="header__btn" activeClassName="header__btn--active" to="/result/res-anlys">實驗結果分析</NavLink>
    <NavLink className="header__btn" activeClassName="header__btn--active" to="/result/ques-anlys">測後問卷分析</NavLink>
    <NavLink className="header__btn" activeClassName="header__btn--active" to="/result/conclusion">結論</NavLink>
  </div>
);

const Header = () => (
  <div>
    <div className="header">
      <NavLink className="header__home" to="/">
        <FontAwesomeIcon icon={faHome} size="2x"/>
      </NavLink>
      <NavLink className="header__btn" activeClassName="header__btn--active" to="/project">計劃緣起</NavLink> 
      <NavLink className="header__btn" activeClassName="header__btn--active" to="/method">研究方法</NavLink>
      <NavLink className="header__btn" activeClassName="header__btn--active" to="/result">現階段成果</NavLink>
      <NavLink className="header__btn" activeClassName="header__btn--active" to="/contact">聯絡我們</NavLink>
      {/* <a href="javascript:void(0)" className="header__toggle" onClick="toggle()"></a> */}
    </div>
    <Route path="/result" component={ResultNav}></Route>
  </div>
);

export default Header;
