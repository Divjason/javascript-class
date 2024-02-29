// 구조분해할당
// 프로젝트가 커질수록 JS 파일 모듈화 사용 빈번!!
// 모듈 > 객체 혹은 배열 > 값 변수 할당 > 찾아와야!!

// const fruits = ["사과", "복숭아"];

// // const apple = fruits[0];
// // const peach = fruits[1];

// const [apple, peach] = fruits;

// console.log(apple, peach);

// const [spring, fall] = ["봄", "여름", "가을", "겨울"];
// console.log(spring, fall);

// const [teacher, ...students] = ["park", "kim", "lee", "choi"];
// console.log(teacher, students);

// const member = {
//   name: "kim",
//   age: 25,
// };

// const name = member.name;
// const age = member.age;
// console.log(name, age);

// const { name: userName, age } = member;
// console.log(userName, age);

// 배열 메서드 심화!!!
// map() / filter() / reduce()

// map() : 기존 배열의 값을 찾아와서 특정 산술작업 후 해당 데이터들을 취합하여 새로운 배열을 만들어주는 함수!!

// const numbers = [1, 2, 3, 4, 5];
// // let newNumbers = numbers.map((number) => number * 2);

// // console.log(numbers);
// // console.log(newNumbers);

// let newNumbers2 = numbers.map((number, index) => index + number * 3);
// console.log(newNumbers2);

// filter()
// const scores = [90, 35, 64, 88, 45, 92];
// let highScores = scores.filter((score, index) => {
//   if (score >= 85) {
//     console.log(`index : ${index}, score : ${score}`);
//     return score;
//   }
// });

// reduce() : 누산기!!
// reduce(콜백함수(누산기, 현재값, 인덱스, 원래배열), 초기값)

// const numbers = [1, 2, 3, 4, 5];
// let result = numbers.reduce((total, current) => total + current, 0);

// console.log(result);

// Map, Set
// 프로그래밍 언어 : 대문자 & 소문자!!
// JS : 자료형!!! => 객체 & 배열
// 객체 => 자료값을 저장.관리 => 키, 값 => 프로퍼티
// forEach / for...of / for문 과 같은 값을 반복적으로 실행시킬 수 있는 함수가 매우 부족!!

// let bag = new Map();
// bag.set("color", "red");
// bag.set("type", "mini").set("purpose", "daily");

// 메서드 체이닝 기법 => 1개의 객체에 마치 체인처럼 복수의 메서드 함수를 연달아서 사용하는 모습!!

// bag.set("type", "mini");
// bag.set("purpose", "daily");

// console.log(bag);

// const myCup = new Map([
//   ["color", "white"],
//   ["havehandle", true],
//   ["material", "ceramic"],
//   ["capacity", "30ml"],
// ]);

// console.log(bag.size);
// console.log(bag.get("color"));
// console.log(bag.has("color"));
// console.log(bag.delete("type"));
// console.log(bag.clear());
// console.log(bag);

// console.log(myCup.keys());

// // 객체 혹은 배열 : 이터러블 객체
// // 이터러블 객체 => 이터레이터 속성!!!

// for (key of myCup.keys()) {
//   console.log(key);
// }

// for (key of myCup.values()) {
//   console.log(key);
// }

// for (key of myCup.entries()) {
//   console.log(key);
// }

// let numSet1 = new Set();
// numSet1.add("one").add("two");
// console.log(numSet1);

// let numSet2 = new Set([1, 2, 3]);
// console.log(numSet2);

let students = new Set();

students.add("홍길동");
students.add("슛돌이");
students.add("영심이");
console.log(students);

console.log(students.has("슛돌이"));
students.delete("영심이");
console.log(students);
students.clear();
console.log(students);

// Map, Set 차이점!!
// 1) Map객체 : key, value 한쌍으로 갖는다 VS Set 단일 값
// 2) Map객체 : 중복되는 값이 존재할수도 있다 VS Set 절대로 중복되는 값을 가질 수 없음!!
