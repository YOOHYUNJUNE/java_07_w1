import useInputs from "../../hooks/useInputs";


const SignUp = () => {

    const {form, handleChange, handleReset} = useInputs({
        email: "",
        nickname: "",
        password: "",
        password_chk: ""
    });
    const {email, nickname, password, password_chk} = form;


    return ( 
        // 회원가입시 {email, nickname, password, password_chk}
        <>
            <h1>회원가입</h1>
            <form>
                <div className="input-group">
                    <label htmlFor="email">이메일</label>
                    <input type="email" id="email" name="email" value={email} onChange={handleChange}></input>
                </div>
                <div className="input-group">
                    <label htmlFor="nickname">닉네임</label>
                    <input id="nickname" name="nickname" value={email} onChange={handleChange}></input>
                </div>
                <div className="input-group">
                    <label htmlFor="password">비밀번호</label>
                    <input type="password" id="password" name="password" value={password} onChange={handleChange}></input>
                </div>
                <div className="input-group">
                    <label htmlFor="password_chk">비밀번호 확인</label>
                    <input type="password" id="password_chk" name="password_chk" value={password} onChange={handleChange}></input>
                </div>
                <div className="btn-group">
                    <button type="button" onClick={handleReset}>초기화</button>
                    <button>회원가입</button>
                </div>

            </form>
        </>
     );
}
 
export default SignUp;

