import './App.css';

function App() {

  const name = "React"
  const url = "https://naver.com"

  const style = {color: 'red', backgroundColor: '#333'};
  const num = 10;



  return (
    <div>
      
      <h1>{name + ".js"} 시작</h1>
      <a href={url}>네이버</a>

      <br/>
      <hr/>
      <input type='password' />
      
      {/* class: className, for: htmlFor (id가 같으면 같이 동작) */}
      <div className='title'>제목</div>
      <label htmlFor='user_id'>아이디</label>
      <input type='text' id='user_id'></input>
      
      {/* 스타일 {{객체}}*/}
      <div style={style}>안녕하세요</div>

      <div>
        {num > 10 ? 
        <h1>"num({num})은(는) 10보다 크다."</h1> 
        : 
        <h1> "num({num})은(는) 10보다 같거나 작다."</h1>
        }

      </div>


    </div>
  );
}

export default App;
