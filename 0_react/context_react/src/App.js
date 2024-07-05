import logo from './logo.svg';
import './App.css';
import GrandFather from './components/GrandFather';
import { SamsungContext } from './contexts/SamsungContext';
import { useState } from "react"
import { MyColorContext } from './contexts/MyColorContext';
import ColorBox from './components/ColorBox';
import Color from './components/Color';
import StatePractice from './components/StatePractice';
import ReducerPractice from './components/ReducerPractice'

function App() {
  const [myColor, setMyColor] = useState('red');
  return (

    <MyColorContext.Provider value={{myColor, setMyColor}}>

      <SamsungContext.Provider value={"삼성주식"}>

        <div className="App">
          {/* <GrandFather /> */}
          {/* <ColorBox></ColorBox> */}
          {/* <Color></Color> */}
          {/* <StatePractice></StatePractice> */}
          <ReducerPractice></ReducerPractice>
        </div>

      </SamsungContext.Provider>
    </MyColorContext.Provider>
  );
}

export default App;
