import Button from "./Button";

const Introduce = (props) => {
    return ( 
        <div>
            <h2>안녕하세요</h2>
            <Button size='small' color='orange'>클릭</Button>
            <Button size='medium' color='blue'>누르세요</Button>
            <Button size='large' color='red'>Click</Button>
            <Button event={()=> alert('클릭되었습니다.')}></Button>
            <p>내 친구 이름은 {props.name}입니다.</p>
            <p>내 친구의 성별은 {props.gender}입니다.</p>
        </div>
     );
}

// props 디폴트값 설정
Introduce.defaultProps = {
    name: '1111',
    gender: '남'
}
 
export default Introduce;