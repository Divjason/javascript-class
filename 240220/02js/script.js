// 객체
// 객체 형태

// const book1 = {
//   title: "자바스크립트",
//   pages: 648,
// };

// console.log(book1.title);
// console.log(book1["pages"]);

// let book2 = new Object();
// book2.title = "Javascript";
// book2.pages = 500;

// delete book2.pages;

// console.log(book2);

// const student = {
//   name: "David",
//   score: {
//     history: 85,
//     science: 94,
//     average: function () {
//       return (this.history + this.science) / 2;
//     },
//   },
// };

// console.log(student.name);

// method = 메서드 = 객체 안에 있는 함수를 지칭할 때 사용하는 단어! = 함수
// console.log(student.score.average());

// const book3 = {
//   title: "타입스크립트",
//   pages: 360,
//   buy: function () {
//     console.log("이 책을 모두 읽었습니다!");
//   },
//   done: false,
//   finish: () => {
//     this.done === false ? console.log("false") : console.log("true");
//   },
// };

// 객체 안에 메서드 함수를 생성할 때, class 함수 혹은 익명함수를 사용할 때에는 this객체가 가르키는 것이 바로 상위요소의 객체를 지칭하는 것이지만, 만약 화살표함수를 사용해서 객체 내 메서드 함수를 생성할 때, this객체를 사용한다면, 그때 this객체가 가르키는 상위요소가 아닌 window 객체를 지칭하는 것입니다!!! 따라서 객체 내 메서드 함수를 생성할 때에는 반드시 익명함수의 형태를 띄는 것이 좋습니다!!!

// console.log(book3);
// console.log(book3.finish());

// 객체 복사 개념!!

// let number1 = 100;
// number1 = 200;
// let number2 = number1;

// console.log(number1);
// console.log(number2);

// number2 = 200;
// console.log(number1);
// console.log(number2);

// let bag1 = {
//   color: "blue",
//   window: 30,
//   height: 50,
// };

// let bag2 = bag1;
// bag2.color = "red";

// console.log(bag1);
// console.log(bag2);

// 자료형!!
// 변수에 담을 수 있는 값의 형태!!

// 원시타입 자료형 : 숫자형, 문자열
// 참조타입 자료형 : 객체, 배열

// 컴퓨터 > 자료생성 & 불러와서 사용하는 방식 자체 다름!!

// 객체를 생성 2가지 방법

// let bag1 = {
//   color: "blue",
//   window: 30,
//   height: 50,
//   title: "bag1",
// };

// let bag2 = {
//   color: "blue",
//   window: 30,
//   height: 50,
//   title: "bag2",
// };

// let bag3 = {
//   color: "blue",
//   window: 30,
//   height: 50,
//   title: "bag3",
// };

// let bag4 = {
//   color: "blue",
//   window: 30,
//   height: 50,
//   title: "bag4",
// };

// 생성자 함수를 활용해서 프로토타입으로 틀을 만들어놓고, 차별점을 줘야하는 값을 제외하고는 나머지 요소는 이 틀안에서 공통으로 생성될 수 있도록 해주자!!! => 비효율적으로 객체생성하지 않아도 될 수 있게해주자!!!
// 생성자 "함수"를 통해서 프로토타입의 객체 => 프로토타입을 통해서 만들어진 객체 => 인스턴스 객체

// function Book(title, pages, done = false) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
//   this.finish = function () {
//     let str = "";
//     this.done === false ? (str = "읽는중") : (str = "완독");
//     return str;
//   };
// }

// let date = new Date();
// console.log(date);

// let book1 = new Book("자바스크립트", 648, false);
// console.log(book1);

// 클래스를 사용해서 객체를 생성하는 방법
// 생성자함수를 사용해서 객체생성하는 방법 VS 클래스를 사용해서 객체를 생성하는 방법
// 객체의 메서드 = 함수를 별도의 공간으로 빼서 생성

class Book2 {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }

  finish() {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  }
}

const book3 = new Book2("파이썬", 500, true);
console.log(book3);
