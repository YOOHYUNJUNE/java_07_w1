
import Header from "./Header";
import Main from "./Main";


const Layout = ({children}) => {
    return ( 
        <>
            <Header></Header>
                <Main>

                    {children}

                </Main>
        </>
     );
}
 
export default Layout;

