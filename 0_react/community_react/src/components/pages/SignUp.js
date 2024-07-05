import useInputs from "../../hooks/useInputs";
import axios from "axios";
import { useState } from "react";
import styled from '@emotion/styled';
import { Box, FormControl, IconButton, Button, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";


    const SignUp = () => {
        
        const {form, handleChange, handleReset} = useInputs({
            email: "",
            nickname: "",
            password: "",
            password_chk: ""
        });
        const {email, nickname, password, password_chk} = form;
        const [isDuplicate, setIsDuplicate] = useState(false);
        const [errors, setErrors] = useState({});

        // 비밀번호 보이는 토글
        const [showPassword, setShowPassword] = useState(false);
        const handleTogglePassword = () => setShowPassword(!showPassword);
        const handleMouseDownPassword = (e) => e.preventDefault();

        const [showPassword_chk, setShowPassword_chk] = useState(false);
        const handleTogglePassword_chk = () => setShowPassword_chk(!showPassword_chk);
        const handleMouseDownPassword_chk = (e) => e.preventDefault();


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
                    throw new Error("회원가입 실패")
                }
            } catch (error) {
                console.error(error)
            } finally {
                handleReset();
            }

        }
        
    }


    return ( 
        // 회원가입시 {email, nickname, password, password_chk}
        <>
            <Typography variant="h4">회원가입</Typography>
            <Box 
                component={'form'}
                my={4}
                p={2}
                borderRadius={4}
                boxShadow={'0 0 4px gray'}
                sx={{
                    '& > :not(style)' : {m : 1, width: '25ch'}
                }}
                noValidate
                autoComplete='off'
            >

                <TextField
                    label='이메일'
                    variant="outlined"
                    sx={{display: 'block'}}
                    autoFocus
                    required
                    type="email" id="email" name="email" value={email} onChange={handleChange}
                    error={errors.email ? true : false}
                    helperText={errors.email}
                ></TextField>

                <TextField
                    label='닉네임'
                    variant="outlined"
                    sx={{display: 'block'}}
                    required
                    type="nickname" id="nickname" name="nickname" value={nickname} onChange={handleChange}
                    error={errors.email ? true : false}
                    helperText={errors.email}
                ></TextField>

                <FormControl sx={{m:1, width: '100%', display: 'block'}} variant="outlined">
                    <InputLabel htmlFor="password">비밀번호 *</InputLabel>
                    <OutlinedInput 
                        type={showPassword ? 'text' : 'password'} id="password" name="password" value={password} onChange={handleChange}
                        required
                        autoComplete="new-password"
                        label='비밀번호'
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleTogglePassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? "🌝" : "🌚"}
                                </IconButton>
                            </InputAdornment>
                        }
                        error={errors.password ? true : false}
                    ></OutlinedInput>
                    
                </FormControl>
                <FormControl sx={{m:1, width: '100%', display: 'block'}} variant="outlined">
                    <InputLabel htmlFor="password_chk">비밀번호 확인 *</InputLabel>
                    <OutlinedInput 
                        type={showPassword_chk ? 'text' : 'password'} id="password_chk" name="password_chk" value={password_chk} onChange={handleChange}
                        required
                        autoComplete="new-password_chk"
                        label='비밀번호 확인'
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password_chk visibility"
                                    onClick={handleTogglePassword_chk}
                                    onMouseDown={handleMouseDownPassword_chk}
                                    edge="end"
                                >
                                    {showPassword_chk ? "🌝" : "🌚"}
                                </IconButton>
                            </InputAdornment>
                        }
                        error={errors.password_chk ? true : false}
                        
                    ></OutlinedInput>
                    <ErrorMsg>{errors.password || errors.password_chk}</ErrorMsg>
                </FormControl>

                <Button onClick={handleSignUp}>가입</Button>

            </Box>

        </>
     );
}

const ErrorMsg = styled.div`
    color: #d32f2f;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.66;
    letter-spacing: 0.03333em;
    text-align: left;
    margin: 3px 14px 0 14px;
`

const SuccessMsg = styled.div`
    color: #3a7102;
    font-size: 0.8rem;
    margin-top: 0.2rem;
`

 
export default SignUp;

