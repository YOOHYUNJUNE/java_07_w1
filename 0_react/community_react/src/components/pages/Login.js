import useInputs from "../../hooks/useInputs";
import axios from "axios";
// import { Button } from "../ui/Button";
import styled from '@emotion/styled';
import { Button, FormControl, OutlinedInput } from "@mui/material";

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
        const url = `${process.env.REACT_APP_SERVER_ADDR}/users?email=${email}&password=${password}`;
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

            <form>
                <FormControl sx={{width: '100%', display: 'block'}}>
                    <OutlinedInput type="email" name="email" value={email} onChange={handleChange}></OutlinedInput>
                </FormControl>
                <FormControl sx={{width: '100%', display: 'block'}}>
                    <OutlinedInput type="password" name="password" value={password} onChange={handleChange}></OutlinedInput>
                </FormControl>
                
                <Button variant="contained" type="button" 
                    sx={{display: 'block', width: '100%', marginTop: '10px'}}
                    onClick={handleLogin}
                >로그인</Button>


            </form>


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