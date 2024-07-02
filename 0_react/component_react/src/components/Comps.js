
const Nav = () => {

    const style = {
        display: 'flex',
        justifyContent: 'space-around',
    }

    return ( 
        <nav style={style}>
            <div>
                <a href="#">AAAAA</a>
            </div>
            <div>
                <a href="#">BBBBB</a>
            </div>
            <div>
                <a href="#">CCCCC</a>
            </div>
            <div>
                <a href="#">DDDDD</a>
            </div>
            <div>
                <a href="#">EEEEE</a>
            </div>
            <div>
                <a href="#">FFFFF</a>
            </div>
            
        </nav>
     );
}

const Header = () => {
    return ( 
        <header>
            <h1>환영합니다.</h1>

        </header>
     );
}

const Article = (props) => {

    const style = {
        textAlign: 'center',
        backgroundColor: '#aaa',
        height: '50vh',
        margin: '10px 50px'
    }

    return (
        <article>

        <div style={style}>
            <h3>나의 첫 컴포넌트</h3>
            <h2>{props.text}</h2>
        </div>
        </article>
     );
}
 

export {Article, Nav, Header};

