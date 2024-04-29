import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { ProductAll } from './pages/ProductAll';
import { ProductDetail } from './pages/ProductDetail';
import { Navbar } from "./component/Navbar"
import { useAuthContext } from './hooks/useAuthContext';
import { Signup } from './pages/Signup';

/* 
1. 전체상품페이지/상세페이지/로그인
2. 전체 상품 페이지에서는 모든 유저 사용가능
3-1. 로그인 버튼을 누르면 로그인 페이지 나온다.
3-2. 상품상세페이지에서 상품을 클릭하면 로그인이 안되어있을 경우 로그인페이지 이동
4. 로그인 상태-> 상품 디테일 페이지 볼 수 있다.
5. 로그아웃 버튼 -> 로그아웃
   -> 로그인 <-> 로그아웃
6. 상품검색
*/
function App() {
  const { user } = useAuthContext(); 

  return (
    <div className="wrap">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        {/* <Route path="/products/:id" element={<ProductDetail />} /> */}

        {/* privateRoute 설정 */}
        {/* <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />}/> */}
        <Route path="/product/:id" element={user ? <ProductDetail />: <Navigate replace={true} to="/login" />}></Route>

        {/* 로그인이 되어있다면 로그인 화면이나 회원가입 화면으로 이동못하게 함. */}
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace={true} />} />
        {/* <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" replace={true} />} /> */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App;
