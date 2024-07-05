import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/pages/Login';
import { Outlet, Navigate } from "react-router-dom" // 경로 변경을 도와주는 모듈
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Layout from './components/layouts/Layout';
import TimeLine from './components/pages/TimeLine';
import Search from './components/pages/Search';
import Profile from './components/pages/Profile';
import MyProfile from './components/pages/MyProfile';
import NotFound from './components/pages/NotFound';


function App() {

  return (
    // 라우팅: 주소에 따라 다른 화면을 보여주는 것 [react-router-dom]
    // BrowserRouter로 전체를 감싼다
    // Routes 안에 Route로 경로와 컴포넌트 요소를 알려줌

    // <a> 태그로 페이지 이동시, 페이지를 새로 불러옴(상태 초기화)
    // 상태 유지를 위해 Link 컴포넌트로 주소를 바꿔야 함.
    
    <BrowserRouter>

      <Layout>

        {/*
        [누구나 입장가능]
            홈 : /
            타임라인 : /post (게시물 리스트)
            검색기능 : /search (게시물 검색)
            프로필 : /profile/:id (특정인 프로필)
            404NOT FOUND /*

        [회원만 입장가능]
            내프로필 : /profile (내 프로필) 

        [게스트만 입장가능]
            회원가입 : /singup
            로그인 : /login
        */}


        <Routes>

            {/* 누구나 */}
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/post' element={<TimeLine />}></Route>
            <Route path='/search' element={<Search />}></Route>
          

            {/* 게스트만 */}
            <Route element={<GuestRoute />}>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/signup' element={<SignUp></SignUp>}></Route>
            </Route>


            {/* 회원만 */}
            <Route element={<UserRoute />}>
                {/* <Route path='/logout' element={<h1>로그아웃</h1>}></Route> */}
                <Route path='/profile' element={<MyProfile />}></Route>
            </Route>

            {/* 모든 유저가 보는 프로필은 후순위. 로그인 유저의 프로필사진이 우선이 되어야 함 */}
            <Route path='/profile/:id' element={<Profile />}></Route>

            <Route path='*' element={<NotFound />}></Route>

        </Routes>

      </Layout>

    </BrowserRouter>
    
  );

}


// 게스트 유저
const GuestRoute = () => {
  const LoginUser = localStorage.getItem("loginUser");
  // const isLogin = loginUser ? true : false;
  const isLogin = !!LoginUser;

  return (
      isLogin ? <Navigate to="/info"/> : <Outlet />
  ) 
}

// 로그인 유저
const UserRoute = () => {
  const LoginUser = localStorage.getItem("loginUser");
  // const isLogin = loginUser ? true : false;
  const isLogin = !!LoginUser;

  return (
      isLogin ? <Outlet /> : <Navigate to="/login"/>
  ) 
}

export default App;
