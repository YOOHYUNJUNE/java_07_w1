import { useReducer } from "react"

// useReducer: useState보다 더 다양한 컴포넌트 상태 관리가 가능한 훅

// const [state, setState] = useState(initialValue)
// const [state, dispatch] = userReducer(reducer, initialValue);
    // 첫째 매개변수: reducer 함수
        // reducer = (state, action) => {}
        //  state : 상태값 / action: 특정 타입에 따라 변화하는 조건

    // 둘째 매개변수: initualValue (초기값)
        // dispatch (보내다): action 객체를 파라미터로 받아, reducer 함수를 호출하는 함수
        // dispatch(action객체)

const ReducerPractice = () => {
    
    // // if 방법
    // const reducer = (state, action) => {
    //     if (action == 'plus') {
    //         return state + 1;
    //     } else if (action == 'minus') {
    //         return state - 1;
    //     } else if (action == 'reset') {
    //         return state = 0;
    //     }
    // };

    // switch 방법
    const reducer = (state, action) => {
        switch(action) {
            case 'plus' :
                return state + 1;
            case 'minus' :
                return state - 1;
            case 'reset':
                return state = 0;
        }
    }

    // dispatch
    const [state, dispatch] = useReducer(reducer, 0)

    return ( 
        <>
        <h1>useReducer</h1>
        <h2>숫자 상태 : {state}</h2>
        <button onClick={() => dispatch("plus")}>더하기</button>
        <button onClick={() => dispatch("minus")}>빼기</button>
        <button onClick={() => dispatch("reset")}>초기화</button>


        </>

     );
}
 
export default ReducerPractice;
