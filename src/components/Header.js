import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const ResultNav = () => (
  <div className="header row">
    <div className="col-1"></div>
    <div className="header__element"></div>
    <div className="header__element">
      <NavLink to="result/background">受試者背景</NavLink>
    </div>
    <div className="header__element">
      <NavLink to="result/res-anlys">實驗結果分析</NavLink>
    </div> 
    <div className="header__element">
      <NavLink to="result/ques-anlys">測後問卷分析</NavLink>
    </div> 
    <div className="header__element">
      <NavLink to="result/conclusion">結論</NavLink>
    </div> 
  </div>
);

const Header = () => (
  <div>
    <div className="header row">
      <div className="col-1"></div>
      <div className="header__element">
        <NavLink to="/">
          <FontAwesomeIcon icon={faHome} size="2x"/>
        </NavLink>
      </div>
      <div className="header__element">
        <NavLink to="/project">計劃緣起</NavLink> 
      </div>
      <div className="header__element">
        <NavLink to="/method">研究方法</NavLink>
      </div>
      <div className="header__element">
        <NavLink to="/result/background">現階段成果</NavLink>
      </div>
      <div className="header__element">
        <NavLink to="/contact">聯絡我們</NavLink>
      </div>
    </div>
    <Route path="/result" component={ResultNav}></Route>
  </div>
);

export default Header;
