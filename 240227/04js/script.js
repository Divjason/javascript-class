// 서로 다른 배열을 하나로 합쳐주는 메서드 함수

const vegitable = ["양상추", "토마토", "피클"];
const meat = ["불고기"];
const cheese = ["모짜렐라", "슈레드"];

const meatBurger = meat.concat(vegitable, "빵");
console.log(meatBurger);

const cheeseBurger = [...vegitable, ...cheese, ...meat];
console.log(cheeseBurger);

// reverse()
const numbers = [6, 9, 3, 21, 18];
console.log(numbers.reverse());

// sort()
const week = ["sun", "mon", "tue"];
const values = [5, 20, 3, 11, 4, 15];

console.log(week.sort());
console.log(values.sort());

console.log(
  values.sort((a, b) => {
    // if (a > b) return 1;
    // if (a < b) return -1;
    // if (a === 0) return 0;
    return b - a;
  })
);

// pop() & push() : 배열의 맨 마지막값
// => 배열의 원본 데이터값이 변경!!

const animals = ["lion", "bear", "bird"];

animals.pop();
console.log(animals);

animals.push("tiger");
console.log(animals);

// shift() & unshift() : 배열의 맨 첫번째값
const fruits = ["apple", "pear", "banana"];

fruits.shift();
console.log(fruits);

fruits.unshift("cherry");
console.log(fruits);

// splice(인덱스, 갯수) : 특정 요소의 위치를 찾고자 할 때
// substr(인덱스, 갯수) => 문자열 사용 메서드 함수

const week01 = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const weekday = week01.splice(1, 5);
console.log(weekday);

const subjects = ["html", "css", "javascript", "react", "typescript"];
const majors = subjects.splice(2);
console.log(majors);
console.log(subjects);

// slice(인덱스, 인덱스) => 문자열 slice() => substring()
// 첫번째 인덱스 값부터 시작해서 두번째 인덱스값 바로 직전까지
// 배열에서는 slice를 사용할 때, 두번째 인자값을 주지 않으면 첫번째 인덱스값부터 마지막 인덱스 값까지 찾아온다!!

const colors = ["red", "green", "blue", "white", "black"];
console.log(colors.slice(2));
console.log(colors);

// spilce의 경우, 원본 데이터 배열값 수정 가능 VS slice의 경우, 원본 데이터 배열값 수정 불가능
