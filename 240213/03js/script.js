const displayDate = document.querySelector("#today");
const displayClock = document.querySelector("#clock");

// 날짜 정보를 획득
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let day = today.getDay();
let result = "";

switch (day) {
  case 0:
    result = "일요일";
    break;
  case 1:
    result = "월요일";
    break;
  case 2:
    result = "화요일";
    break;
  case 3:
    result = "수요일";
    break;
  case 4:
    result = "목요일";
    break;
  case 5:
    result = "금요일";
    break;
  case 6:
    result = "토요일";
    break;
}

displayDate.innerText = `${year}년 ${month}월 ${date}일 ${result}`;

// 시간 정보를 획득

let clock = () => {
  let current = new Date();
  let hrs = current.getHours();
  let mins = current.getMinutes();
  let secs = current.getSeconds();

  let period = "AM";

  if (hrs === 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  displayClock.innerText = `${period} ${hrs} : ${mins} : ${secs}`;
};
setInterval(clock, 1000);
