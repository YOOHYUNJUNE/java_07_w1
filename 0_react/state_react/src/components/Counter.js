import { useState } from "react"

const Counter = () => {

    // const stateArr = useState();
    // stateArr(상태값, 상태변경함수)

    const [number, setNumber] = useState(0);

    return ( 
        <h1>
            {number}
            <button onClick={()=> setNumber(number + 1)}>클릭</button>
        </h1>
     );
}
 
export default Counter;