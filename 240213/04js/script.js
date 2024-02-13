// 수학객체!!
const num = 2.1234;

// 반올림하고싶을 때
const roundNum = Math.round(num);
console.log(roundNum);

// 소수점 첫번째 자리 숫자를 버리고 싶을 때
const floorNum = Math.floor(num);
console.log(floorNum);

// 소수점 첫번째 자리 숫자를 올리고 싶을 때
const ceilNum = Math.ceil(num);
console.log(ceilNum);

// 0~0.999999.... 까지의 실수를 난수형태로 생성하고 싶을 때
const randomNum = Math.random();
console.log(randomNum);

// 원주율 값을 생성하고자 할 때
const piNum = Math.PI;
console.log(piNum);

// 컴퓨터 VS 나하고 가위.바위.보

// 나 : 가위.바위.보 직접 선택!!
// JS => DOM => 가위=0.바위=1.보=2
// 컴퓨터 : 랜덤 값 => random() 0~2
// 가위.바위.보 비긴 게임
// 0 : 1 => 컴 윈
// 0 : 2 => 내 윈

// 6개 숫자를 랜덤!!!
// 중복x / 45까지

// 예제!!!
