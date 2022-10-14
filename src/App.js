import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";


//1. 전체상품페이지, 로그인, 상품상세페이지
//1-1 네비게이션바(유지)
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인버튼을 누르면 로그인 페이지가 나온다.
//4. 상품디테일을 눌렀으나, 로그인이 안돼있을경우 로그인페이지가 먼저 나온다.(private router)
//5. 로그인 상태일경우 상품 디테일 페이지를 볼 수 있다.
//6. 로그아웃 버튼을 클릭하면 로그아웃
//7. 로그아웃 상태에서는 상품 디테일페이지를 볼 수 없다. 다시 로그인페이지로
//8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
//9. 상품을 검색할 수 있다.
function App() {
  //const [authenticate, setAuthenticate ] = useState(false)//true 이면 로그인

  // useEffect(()=>{
  //   console.log("변경",authenticate)
  // },[authenticate]);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product/:id" element={<PrivateRoute/> }/>
      </Routes>
    </div>
  );
}

export default App;
