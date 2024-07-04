import { Routes, Route, Outlet, Navigate } from "react-router-dom" // 경로 변경을 도와주는 모듈
import { styled } from "styled-components"
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Main = () => {
    return ( 
        <StyledMain>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>

            {/* 게스트 */}
            <Route element={<GuestRoute />}>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/signup' element={<SignUp></SignUp>}></Route>
            </Route>

            {/* 로그인한 유저만 */}
            <Route element={<UserRoute />}>
                <Route path='/logout' element={<h1>로그아웃</h1>}></Route>
                <Route path='/info' element={<h1>유저 인포</h1>}></Route>
            </Route>

            <Route path='*' element={<h1>없는 경로ㅎ</h1>}></Route>

        </Routes>
        </StyledMain>
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


const StyledMain = styled.main`
    width: 70vw;
    margin: 0 auto;
`


export default Main;