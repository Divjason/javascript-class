// // 문자열에서 사용할 수 있는 다양한 메서드

// const t = "Hello Thank you good luck to you";

// console.log(t.charAt(16));
// console.log(t.indexOf("you"));
// // 일치하는 값이 없는 경우 -1반환
// console.log(t.lastIndexOf("you"));
// console.log(t.match("luck"));
// console.log(t.search("you"));
// console.log(t.substr(21, 4));
// console.log(t.substring(6, 12));
// console.log(t.replace("you", "me"));
// console.log(t.toLowerCase());
// console.log(t.toUpperCase());
// console.log(t.length);

// let s = t.split("");
// console.log(s);
// console.log(s[0]);
// console.log(s[4]);

// const userName = prompt("당신의 영문 이름?");
// const upperName = userName.toUpperCase();
// document.write(upperName, "<br/>");

// const userNum = prompt("당신의 연락처는?");
// const result = userNum.substring(0, userNum.length - 4) + "****";
// document.write(result);

// 사용자가 특정 사이트 회원가입

const userEmail = prompt("당신의 이메일 주소는?");
const arrUrl = [".com", ".co.kr", ".net", ".or.kr", ".go.kr"];

// 일반적인 이메일 주소 형식 : abc@naver.com
let check1 = false;
let check2 = false;

if (userEmail.indexOf("@") > 0) {
  check1 = true;
}

for (let i = 0; i < arrUrl.length; i++) {
  if (userEmail.indexOf(arrUrl[i]) > 0) {
    check2 = true;
  }
}

if (check1 && check2) {
  console.log(userEmail);
} else {
  alert("이메일 형식이 잘못되었습니다!");
}
