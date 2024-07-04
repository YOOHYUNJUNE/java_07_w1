import styled from "styled-components";
import useInputs from "../../hooks/useInputs";
import { Button } from "../ui/Button";
import axios from "axios";
import { useState } from "react";


    const SignUp = () => {
        
        const {form, handleChange, handleReset} = useInputs({
            email: "",
            nickname: "",
            password: "",
            password_chk: ""
        });
        const {email, nickname, password, password_chk} = form;
        const [isDuplicate, setIsDuplicate] = useState(true);
        const [errors, setErrors] = useState({});

        const handleDuplicate = async() => {
            if (email.trim()) {
                const url = `${process.env.REACT_APP_SERVER_ADDR}/users?email=${email}`;
                
                try {
                    const res = await axios.get(url);
                    if (!res.data.length) {
                        setErrors({});
                        setIsDuplicate(true);
                    } else {
                        setErrors({email: "이미 존재하는 이메일입니다."})
                        setIsDuplicate(false);
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
        
    // 가입 시 빈 값 체크: email중복, nickname 빈값, password 빈값, password_chk 빈값 & pw 일치여부
        
        // const isBlank = (value) => value.trim() === "";
        // const validate = () => {
        //     if(isBlank(email) || isBlank(nickname) || isBlank(password) || isBlank(password_chk)) {
        //         alert('빈칸을 채워주세요.')
        //     } return false;
        // }

        const validate = () => {
            let isValid = true;

            const newErrors = {};

            for(const [key, value] of Object.entries(form)) {
                // console.log(key, value, isValid);
                // 빈값여부
                if(!value.trim()) {
                    isValid = false;
                    newErrors[key] = `${key}를 입력해주세요.`
                }
                if (form.password !== form.password_chk) {
                    isValid = false;
                    newErrors.password_chk = '비밀번호가 불일치합니다.'
                }
            } 
            setErrors(newErrors);
            return isValid;
        }


    const handleSignUp = async(e) => {
        e.preventDefault();

        // if(!validate()) {return}
        if (validate() && isDuplicate) {

            const url = `${process.env.REACT_APP_SERVER_ADDR}/users`;
            const user = {email, nickname, password};
            try {
                const res = await axios.post(url, user)
                if (res.status === 201) {
                    alert('회원가입 완료')
                } else {
                    throw Error("회원가입 실패")
                }
            } catch (error) {
                console.error(error)
            } finally {
                handleReset();
            }

        } // validate()
        
    }


    return ( 
        // 회원가입시 {email, nickname, password, password_chk}
        <>
            <h1>회원가입</h1>
            <JoinForm>
                <div className="input-group">
                    <label htmlFor="email">이메일</label>
                    <div>
                        <input type="email" id="email" name="email" value={email} onChange={handleChange}></input>
                        {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
                        {isDuplicate && <SuccessMsg>사용 가능한 이메일입니다.</SuccessMsg>}
                    </div>
                    <Button type="email" color="#9a9a9a" onClick={handleDuplicate}>중복확인</Button>
                </div>
                <div className="input-group">
                    <label htmlFor="nickname">닉네임</label>
                    <div>
                        <input id="nickname" name="nickname" value={nickname} onChange={handleChange}></input>
                        {errors.nickname && <ErrorMsg>{errors.nickname}</ErrorMsg>}
                    </div>
                </div>
                <div className="input-group">
                    <label htmlFor="password">비밀번호</label>
                    <div>
                        <input type="password" id="password" name="password" value={password} onChange={handleChange}></input>
                        {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
                    </div>
                </div>
                <div className="input-group">
                    <label htmlFor="password_chk">비밀번호 확인</label>
                    <div>
                        <input type="password" id="password_chk" name="password_chk" value={password_chk} onChange={handleChange}></input>
                        {errors.password_chk && <ErrorMsg>{errors.password_chk}</ErrorMsg>}
                    </div>

                </div>
                <div className="btn-group">
                    <Button type="button" onClick={() => {handleReset(); setErrors({});}} color="#ff8282">초기화</Button>
                    <Button color="#5f97f9" onClick={handleSignUp}>회원가입</Button>
                </div>

            </JoinForm>
        </>
     );
}

const JoinForm = styled.form`
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    .input-group {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 1rem auto;
        height: 2rem;

        label {
            margin-right: 1rem;
        }

        input {
            border: none;
            border-radius: 4px;
            background-color: #b8f2f9;
            padding: 0.8rem;
        }
    }

    .btn-group {
        padding-top: 2rem;
        margin: 0 auto;
    }
`

const ErrorMsg = styled.div`
    color: #ff5555;
    font-size: 0.8rem;
    margin-top: 0.2rem;
`

const SuccessMsg = styled.div`
    color: #3a7102;
    font-size: 0.8rem;
    margin-top: 0.2rem;
`

 
export default SignUp;

