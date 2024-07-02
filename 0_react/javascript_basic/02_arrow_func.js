function sum1(x, y) {return x + y;}
const sum2 = function(x, y) {return x + y;}
const sum3 = (x, y) => {return x + y;} // 화살표함수: function을 지우고 => 로 표시
const sum4 = (x, y) => x + y; // return을 생략할 수 있음
const sum5 = (x, y) => {return {a : (x + y)}};

console.log(sum1(1, 2));
console.log(sum2(1, 2));
console.log(sum3(1, 2));
console.log(sum4(1, 2));
console.log(((x, y) => x + y)(1, 2));

console.log(sum5(1, 2));



