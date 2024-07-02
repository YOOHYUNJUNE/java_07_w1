import Comp from "./components/Comp";
// import {Header, Nav, Article} from "./components/Comps"
import * as Comps from './components/Comps'
import Introduce from "./components/Introduce";


function App() {
  const {Header, Nav, Article} = Comps;

  return (
    <div>
      <Comp></Comp>
      <Header></Header>
      <Nav></Nav>
      {/* props: 부모 컴포넌트가 자식에게 전달하는 값 */}
      <Article text="안녕하세요"></Article>
      
      <Introduce name="유현준" gender="남"></Introduce>
      <Introduce name="유현준" gender="남"></Introduce>
      <Introduce name="유현준" gender="남"></Introduce>
      <Introduce></Introduce>
    </div>
  );
}

export default App;
