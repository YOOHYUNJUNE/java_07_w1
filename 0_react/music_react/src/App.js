import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { useState } from "react";
import Music from './components/Music';

function App() {

  const [musicList, setMusicList] = useState([{
    id: new Date().getTime(), 
    title: "Love wins all", 
    like: 0,
    boom: true 
  }]);

  const [musicInput, setMusicInput] = useState("");

  // 버튼 클릭 시 input()이 추가
  // musicInput이 공백(false)일 경우 입력이 되지 않음
  const addMusic = () => {
    musicInput && setMusicList([...musicList, {
      id: new Date().getTime(), 
      title: musicInput, 
      like: 0,
      boom: true
    }])
  }

  return (
    <div className="App">

      <div>
          <h1>플레이리스트</h1>
      </div>
      
      <div className='music-box'>

        <div>
          <label htmlFor='title_input'></label>

          <input 
              id='title_input' type='text' placeholder='음악 제목을 입력하세요.' 
              value={musicInput} 
              onChange={(e)=> setMusicInput(e.target.value)}>
          </input>

          <button onClick={addMusic}>추가</button>

          <div>
            {musicList.map((music, idx) => (

                <Music music={music} idx={idx} musicList={musicList} setMusicList={setMusicList}></Music>
              ))}
          </div>
          
        </div>
    
      </div>
    </div>
  );
}

export default App;
