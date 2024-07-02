// 배열 안 요소들을 처리해서 [새로운 배열 생성]

const arr = [1, 3, 5, 7, 9];

const mapArr1 = arr.map((value, index, array) => value +1); // index, array 생략 가능
console.log(mapArr1);

const mapArr2 = arr.map((value, index) => value + index);
console.log(mapArr2);

const mapArr3 = arr.map((value, inde, array) => value + array[4]);
console.log(mapArr3);



