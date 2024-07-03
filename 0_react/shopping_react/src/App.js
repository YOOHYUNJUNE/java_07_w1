import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Product from './components/Product';
import { Routes, Route, BrowserRouter } from "react-router-dom" // 경로 변경을 도와주는 모듈
import ProdDetail from './components/product/ProdDetail';

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<h1>홈</h1>} />
          <Route path='/about' element={<h1>정보</h1>} />
          <Route path='/service' element={<h1>서비스</h1>} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<ProdDetail />} />
          
        </Routes>
      </div>
  );
}

export default App;
