import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ authenticate, setAuthenticate }) => {
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
  const navigate = useNavigate()

  const search = (e) => {
    if (e.key === 'Enter') {
      //입력한 검색어를 읽어와서 url변경
      let keyword = e.target.value
      navigate(`/?q=${keyword}`)
    }
  }

  return (
    <div className="Navbar">
      {authenticate ? (
        <div className="login-button" onClick={() => setAuthenticate(false)}>
          <FontAwesomeIcon icon={faUser} className="login-icon" />
          <div>로그아웃</div>
        </div>
      ) : (
        <div className="login-button" onClick={() => navigate('/login')}>
          <FontAwesomeIcon icon={faUser} className="login-icon" />
          <div>로그인</div>
        </div>
      )}
      <div className="nav-section" onClick={() => navigate('/')}>
        <img
          width={100}
          src="https://3dwarehouse.sketchup.com/warehouse/v1.0/content/public/3e17273b-330d-4466-b158-d302aaa27d43"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="제품검색"
            onKeyPress={(e) => search(e)}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
