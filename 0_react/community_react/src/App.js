import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/Header';
import Main from './components/layouts/Main';
import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';

function App() {
  return (
    // 라우팅: 주소에 따라 다른 화면을 보여주는 것 [react-router-dom]
    // BrowserRouter로 전체를 감싼다
    // Routes 안에 Route로 경로와 컴포넌트 요소를 알려줌

    // <a> 태그로 페이지 이동시, 페이지를 새로 불러옴(상태 초기화)
    // 상태 유지를 위해 Link 컴포넌트로 주소를 바꿔야 함.
    
    <div>
      <Header />
      {/* <Home></Home> */}
      <Main />
      {/* <Login></Login> */}

    </div>
    
  );
}

export default App;
