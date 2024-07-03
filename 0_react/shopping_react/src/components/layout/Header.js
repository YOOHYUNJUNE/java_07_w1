import Nav from "./Nav";
import "./Layout.css"

const Header = () => {
    return ( 
        <>
        <header>
            <div className="title">
                <a href="/"><h1>title</h1></a>    
            </div>
            <Nav></Nav>
        </header>
        </>
     );
}





export default Header;