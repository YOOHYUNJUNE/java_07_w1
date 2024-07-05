import { MyColorContext } from "../contexts/MyColorContext";
import { useContext } from "react"
import ColorSelector from "./ColorSelector";

const Color = () => {
    const {myColor} = useContext(MyColorContext)
  

    return ( 
        // 박스를 만들고, ColorSelector에서 가져온 myColor색상으로 배경
        <div style={{width: '128px', height: '128px', backgroundColor: myColor, margin: 'auto'}}>

        </div>

     );
}
 
export default Color;



