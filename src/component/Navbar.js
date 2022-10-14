import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { authenticateAction} from '../redux/actions/authenticateAction';

const Navbar = () => {
  const dispatch = useDispatch('');
  const authenticate = useSelector((state)=>state.auth.authenticate);
  console.log("auth",authenticate)
  
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  let [width, setWidth] = useState(0);
  const Navigate = useNavigate();

  const logout = () => {
    dispatch(authenticateAction.logout(authenticate))
    Navigate('/login')
  };

  const search = (event) => {
    if (event.key == "Enter") {
      //입력한 검색어를 읽어와서 url변경
      let keyword = event.target.value;
      Navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div className="side-menu" style={{width : width}}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="nav-header">
        <div className="burger-menu hide">
        <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        {authenticate ? (
          <div className="login-button" onClick={logout}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그아웃</span>
          </div>
        ) : (
          <div className="login-button" onClick={() => Navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </div>
        )}
      </div>

      <div className="nav-section">
        <img
          onClick={() => Navigate("/")}
          width={100}
          src="https://3dwarehouse.sketchup.com/warehouse/v1.0/content/public/3e17273b-330d-4466-b158-d302aaa27d43"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <a href="#">
              <li key={index}>{menu}</li>
            </a>
          ))}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="제품검색"
            onKeyPress={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
