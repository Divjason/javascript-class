// JS 객체!!!
// const obj = {
//   title: "Today is Good",
//   price: 20000,
// };

// JS 객체 안에 있는 key매칭되는 value값을 찾아오는 방법 2

//1) 온점 표기법
// console.log(obj.title);

//2) 대괄호 표기법
// console.log(obj["price"]);

// JS 내장 객체 = 개발자들이 자주 사용할 것으로 판단되는 객체의 형태를 미리 저장!! => 가져다가 사용만하면 됨!!

// 날짜 객체 & 수학 객체
// new 예약어를 반드시 사용해야함!!

// let today = new Date();
// console.log(today.getFullYear());

// 특정 키워드 뒤에 소괄호가 붙으면 함수!!
// JS의 함수는 모두 class를 활용한 객체의 인스턴스다!!!
// JS는 객체지향 프로그래밍 언어!!

// const fnc = () => {
//   console.log("test");
// };

// fnc();

// let today = new Date();
// let nowMonth = today.getMonth() + 1;
// let nowDate = today.getDate();

// document.write("<h1>오늘의 날짜 정보</h1>");
// document.write(`현재 월 :  ${nowMonth}월`, "<br/>");
// document.write(`현재 일 :  ${nowDate}일`);

// let open = new Date(2023, 12, 23);
// let open = new Date("2024/1/23");
// console.log(open);

// JS 세계관!!!
// 1초 / 2초
// 밀리초!!!
// 1초 = 1000밀리초
// 1밀리초 = 1/1000초
// 1분 = 60초 = 60,000밀리초 (60 * 1000)
// 1시간 = 60분 = 3600초 =3,600,000 밀리초 (60 * 60 * 1000)
// 1일 = 24시간 = 1440분 = 86,400,000 밀리초 (24 * 60 * 60 * 1000)

// 올해 연말까지 며칠이 남았는지를 확인할 수 있는 계산기!!!
// 1) 현 시점의 날짜 정보가 필요!!!
// 2) 올해 연말의 날짜 정보가 필요!!!
// 3) 올해 연말의 날짜 정보 - 현시점의 날짜 정보 = 남은시간

// 현 시점의 날짜 정보 획득
let today = new Date();
let nowYear = today.getFullYear();

// 올해 연말 날짜 정보 획득
let theDate = new Date(nowYear, 11, 31);

// 올해 연말 - 현 시점 날짜 정보
let diffDate = theDate.getTime() - today.getTime();
console.log(diffDate);

let result = Math.round(diffDate / (24 * 60 * 60 * 1000));
console.log(result);

document.write(`연말 D-day : ${result}일 남았습니다!`);
