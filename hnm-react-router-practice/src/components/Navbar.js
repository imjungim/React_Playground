import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M Home',
    'Sale',
    '지속가능성',
  ]
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  }

  return (
    <div className='Navbar'>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://3dwarehouse.sketchup.com/warehouse/v1.0/content/public/3e17273b-330d-4466-b158-d302aaa27d43"
        />
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className='search-box'>
          <FontAwesomeIcon icon={faSearch} />
          <input type='text' placeholder='제품검색'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
