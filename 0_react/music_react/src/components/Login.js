import { useState } from "react";

const Login = () => {

    const [userId, setuserId] = useState("");
    const [userPw, setuserPw] = useState("");

    
    const handleLogin = () => {
        // alert(`로그인 시도 \n ${userId} \n ${userPw}`);
        if(userId === "1" && userPw === "2") {
            alert('로그인 성공') 
        } else {
            alert('로그인 실패')
            setuserId('yoohyunjune');
            setuserPw('1qa2ws');
        }
    }

    return ( 
        <>
            <div>
                <label htmlFor="userId">아이디</label>
                <input type="text" id="userId" value={userId} onChange={(e) => setuserId(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="userPw">비밀번호</label>
                <input type="text" id="userPw" value={userPw} onChange={(e) => setuserPw(e.target.value)}></input>
            </div>
            <button onClick={handleLogin}>로그인</button>
        </>
     );
}
 
export default Login;