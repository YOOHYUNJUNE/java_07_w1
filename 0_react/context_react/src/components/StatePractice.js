import { useState } from "react"

const StatePractice = () => {
    // 값 -> 값변경 으로 
    const [값, 값변경] = useState("물");
    const [값2, 값변경2] = useState(0);

    const handlePlus = () => {
        값변경2(값2 + 1);
    }
    
    // 사칙연산
    const [result, setResult] = useState(0);
    const [x, setX] = useState(0);

    return (
        <>
            <div>
                <h1>{result}</h1>
                <div>
                    <input type="text" value={x} onChange={(e) => setX(e.target.value)}></input>
                </div>

                <div style={{width: '50%', display: 'flex', margin: "0 auto"}}>
                    <button onClick={() => setResult(result+parseInt(x))}>더하기</button>
                    <button onClick={() => setResult(result-parseInt(x))}>빼기</button>
                    <button onClick={() => setResult(result*parseInt(x))}>곱하기</button>
                    <button onClick={() => setResult(result/parseInt(x))}>나누기</button>
                </div>
            </div>
        
        </>
    )


    return ( 
        <>
            <h1>{값}</h1>
            <button onClick={() => 값변경("소금물")}>소금넣기</button>    
            <button onClick={() => 값변경("설탕물")}>설탕넣기</button> 

            <h1>{값2}</h1>  
            <button onClick={() => 값변경2(값2 + 1)}>1씩 더하기</button>
            <button onClick={handlePlus}>1씩 더하기</button>
        </>
     );




}
 
export default StatePractice;