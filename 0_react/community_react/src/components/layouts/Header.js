import { styled } from "styled-components";
import { Link } from 'react-router-dom';
import { BsAndroid2 } from "react-icons/bs"; // react icon


const Header = () => {

    // 로그인하면 로그아웃버튼으로 변경
    const loginUser = localStorage.getItem("loginUser")


    return ( 
        <StyledHeader>
            <Link to="/"><BsAndroid2/></Link>
            <nav>
                <Link to="/">HOME</Link>
                {/* 로그인 후에는 버튼을 로그아웃으로 변경 */}
                {
                    loginUser ?
                    <>
                    <Link to='/info'>{loginUser}</Link>
                    <Link to='/logout'>LOGOUT</Link>
                    </>
                    :

                <Link to ="/login">LOGIN</Link>
                }
                <Link to ="/">MENU</Link>
                <Link to ="/signup">Sign Up</Link>

            </nav>
        </StyledHeader>
     );
}
 
const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between; // 홈 아이콘과 네비 메뉴들을 떨어뜨림
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: #333;
    color: #fff;

    // 로고 아이콘
    & > a {
        color: #fff;
        text-decoration: none;
        font-size: 2.5rem;
    }

    // 네비: 각 메뉴를 flex로 한줄 배열
    nav {
        display: flex;
        a {
            font-size: 20px;
            color: #fff;
            text-decoration: none;
            margin: 0 1rem;

            // 마우스를 대면 밑줄 / &: 부모선택자에도 해당
            &:hover {
                text-decoration: underline;
            }
        }
    }
`

export default Header;