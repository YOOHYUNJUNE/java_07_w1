import "./Layout.css";
import Main from "./Main";

const Layout = ({children}) => {
    return ( 
        <>
            <header>
                <a href="/">메인 로고</a>
                <nav>
                    <li><a href="/#">메뉴1</a></li>
                    <li><a href="/#">메뉴2</a></li>
                    <li><a href="/#">메뉴3</a></li>
                    <li><a href="/#">메뉴4</a></li>
                </nav>
            </header>

            <main><Main/></main>

            <footer>
                연락처 정보
            </footer>

        </>
     );
}
 
export default Layout;