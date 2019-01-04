import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <div>
    <div className="header">
      <NavLink className="header__home" to="/">
        <FontAwesomeIcon icon={faHome} size="2x"/>
      </NavLink>
      <NavLink className="header__btn" activeClassName="header__btn--active" to="/project">計畫緣起</NavLink> 
      <NavLink className="header__btn" activeClassName="header__btn--active" to="/method">研究方法</NavLink>
      <NavLink className="header__btn" activeClassName="header__btn--active" to="/background">受試者背景</NavLink>
      <NavLink className="header__btn" activeClassName="header__btn--active" to="/experiment">實驗結果分析</NavLink>
    </div>
    <div className="header--nopt">
      <FontAwesomeIcon icon={faHome} size="2x" style={{visibility: "hidden"}}/>
      <NavLink className="header__btn" activeClassName="header__btn--active" to="/survey">測後問卷分析</NavLink>
      <NavLink className="header__btn" activeClassName="header__btn--active" to="/conclusion">初步結論</NavLink>
      <NavLink className="header__btn" activeClassName="header__btn--active" to="/contact">聯絡我們</NavLink>
      <div className="header__btn header__btn--disable"></div>
    </div>
  </div>
);

export default Header;
