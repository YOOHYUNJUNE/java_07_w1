import useInputs from "../../hooks/useInputs";
import axios from "axios";
import { useState } from "react";
import styled from '@emotion/styled';
import { Box, FormControl, IconButton, Button, InputAdornment, InputLabel, OutlinedInput, TextField, Typography, FormGroup } from "@mui/material";


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
                        alert('사용 가능한 이메일입니다.')
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

        // 중복 확인 강화 
        // handleChange -> resetDuplicate
        // 사용 가능 이메일 -> 중복 확인 누르지 않고 중복 이메일로 가입 방지
        const resetDuplicate = (e) => {
            setIsDuplicate(false);
            handleChange(e);
        }


        const validate = () => {
            let isValid = true;

            const newErrors = {};

            if (!isDuplicate) {
                newErrors.email = '이메일 중복 체크 해주세요'
            }

            for(const [key, value] of Object.entries(form)) {
                if (form.password !== form.password_chk) {
                    isValid = false;
                    newErrors.password_chk = '비밀번호가 불일치합니다.'
                }
                // console.log(key, value, isValid);
                // 빈값여부
                if(!value.trim()) {
                    isValid = false;
                    newErrors[key] = `빈 칸을 입력해주세요.`
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
                width= {'fit-content'}
                sx={{
                    margin: '0 auto',
                    '& > :not(style)' : {m : 1, width: '100%'}
                }}
                noValidate
                autoComplete='off'
            >
                <FormGroup sx={{flexDirection: 'row', justifyContent: 'space-between'}}>

                    <TextField
                        label='이메일'
                        variant="outlined"
                        autoFocus
                        required
                        type="email" id="email" name="email" value={email} onChange={resetDuplicate} // 중복 확인 강화
                        error={errors.email ? true : false}
                        helperText={errors.email}
                        ></TextField>

                        <Button onClick={handleDuplicate} variant="contained" >중복 확인</Button>

                </FormGroup>
                <TextField
                    label='닉네임'
                    variant="outlined"
                    sx={{display: 'block'}}
                    required
                    type="nickname" id="nickname" name="nickname" value={nickname} onChange={handleChange}
                    error={errors.nickname ? true : false}
                    helperText={errors.nickname}
                ></TextField>

                <FormControl sx={{m:1, width: '100%', display: 'block'}} variant="outlined">
                    <InputLabel sx={errors.password && {color: '#d32f2f'}} htmlFor="password">비밀번호 *</InputLabel>
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
                    <InputLabel sx={errors.password_chk && {color: '#d32f2f'}} htmlFor="password_chk">비밀번호 확인 *</InputLabel>
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

