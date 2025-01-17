import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {

    const [detail, setDetail] = useState('');

    const navigate = useNavigate();
    const handlePageMove = () => {
        // Link와 같은 동작
        // Navigate('/'); 

        // Navigate({
        //     pathname: '/'
        // })
        navigate({
            pathname: '',
            search: `datail=${detail}`
        })
    }

    return ( 
        <>
            <h1>홈</h1>
            <input type="text" value={detail} onChange={(e)=> setDetail(e.target.value)}></input>

            {/* 경로이동 비교 */}
            {/* a: 새 페이지(기존 데이터가 날아감) */}

            <Link to='/'>이동</Link>
            <a href="/">이동</a>
            <button onClick={handlePageMove}>이동</button>
            <h2>현재 state: {detail}</h2>
        </>
     );
}
 
export default Home;