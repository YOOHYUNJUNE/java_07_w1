// 배열을 통해 하나의 값을 만듦

const arr = [1, 2, 3, 4, 5];

const value1 = arr.reduce((acc, cur) => { // 이전 (누적)값, 현재 값
    return acc + cur
});
console.log(value1)

const value2 = arr.reduce((acc, cur) => {
    return acc + cur
}, 900);
console.log(value2)

const lastArr = arr.reduce((acc, cur) => { // filter와 같은 기능
    if (cur % 2 === 0) {
        acc.push(cur)
    } return acc;
}, []);
console.log(lastArr)



