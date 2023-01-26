import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductAll from './pages/ProductAll'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Navbar from './components/Navbar'
import PrivateRoute from './route/PrivateRoute'

//1.전체상품페이지, 로그인, 상품상세페이지
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 > 로그인페이지
//4. 상품디테일을 눌렀으나, 로그인이 안됐을경우 로그인페이지가 나온다.
//5. 로그인이 됐으면 상품 디테일 페이지를 볼 수 있다.
//6. 로그아웃을 클릭하면 로그아웃
//7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다, 다시 로그인페이지가 보인다.
//8. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
//9. 상품을 검색할 수 있다.
function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login  />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute  />}
        />
      </Routes>
    </div>
  )
}

export default App
