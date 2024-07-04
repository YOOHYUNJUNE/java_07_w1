import { useState } from "react";
import styled from "styled-components";
import useInputs from "../../hooks/useInputs";
import axios from "axios";

const Login = () => {

    const {form, handleChange, handleReset} = useInputs({email: '', password: ''})
    // const [form, setForm] = useState({email: '', password: ''});
    const {email, password} = form;

    // 커스텀 훅으로 만들어줄 필요가 있음: hooks/useInputs
    // const handleChange = (e) => {
    //     const {name, value} = e.target;
    //     setForm(form => ({...form, [name]: value}));
    // }
    
    // 가짜 데이터이므로 (POST가 아닌) GET 방식으로 로그인 진행
    const handleLogin = async() => {
        const url = `http://localhost:4885/users?email=${email}&password=${password}`;
        try {
            const res = await axios.get(url);
            console.log(res);
            // 로그인 조건
            if (res.status === 200 && res.data.length == 1) {
                localStorage.setItem("loginUser", res.data[0].nickname);
            } else {
                alert("로그인 불가");
                
            }
        } catch (error) {
            console.error(error);
        }

    }


    return ( 
        <>
            <h1>로그인 화면</h1>
            <StyledLoginBox>
                <div className="input-group">
                    <input type="email" name="email" value={email} onChange={handleChange}></input>
                    <input type="password" name="password" value={password} onChange={handleChange}></input>
                </div>
                <button onClick={handleLogin}>로그인</button>
                {/* <button onClick={handleReset}>초기화</button> */}

            </StyledLoginBox>
        </>
     );
}

const StyledLoginBox = styled.div`
    display: flex;
    .input-group {
        display: flex;
        flex-direction: column;
    }

`

 
export default Login;