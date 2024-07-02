const obj1 = {
    key1: 10,
    key2: "안녕하세요",
    key3: {
        isLogin:false
    }
}


const obj2 = obj1 // 주소값 복사

const obj3 = {...obj1} // (얕은 복사) 객체 내 객체는 주소값 복사

const obj4 = JSON.parse(JSON.stringify(obj1)) // (깊은 복사)


obj1.key1 += 1

obj1.key3.isLogin = true
// console.log(obj1.key1)
// console.log(obj2.key1)
console.log(obj1)
console.log(obj2)

console.log(obj3)

console.log(obj4)

// 파일 경로로 이동해서(cd javascript_basic)
// 실행(node 00_obj_copy.js)