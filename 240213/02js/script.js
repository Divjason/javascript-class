// 1) 기념일을 계산하기 위한 특정한 날짜 정보
// 2) 현 시점의 날짜 정보

// 만난지 며칠째 되는 날
let now = new Date();
let firstDay = new Date("2024/1/1");
let toNow = now.getTime();
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;
let passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));

const accent = document.querySelector("#accent span");
accent.innerText = `${passedDay}일`;

const calcDate = (days) => {
  let future = toFirst + days * (24 * 60 * 60 * 1000);
  let someday = new Date(future);
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let date = someday.getDate();
  document.querySelector(
    "#date" + days
  ).innerText = `${year}년 ${month}월 ${date}일`;
};

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
