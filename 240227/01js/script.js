const str5 = "Hello, everyone";
console.log(typeof str5);

// 문자열 => 배열
const array2 = str5.split("");
console.log(array2);

const array3 = [...str5];
console.log(array3);

const array4 = Array.from(str5);
console.log(array4);

// 배열 => 문자열
const str6 = array4.join("");
console.log(str6);

// 문자열에 대한 문법을 언제 사용하는가? => 회원가입 & 로그인 페이지 => 사용자 대상 체크
// 대문자를 1개이상 || 특수문자 || 몇글자 이상 회원가입

const string = prompt("영문 소문자로 된 문자열을 입력하세요!");

// const firstCh = string[0].toUpperCase();
// const remainStr = string.slice(1);
// const result =

const result = [string[0].toUpperCase(), ...string.slice(1)].join("");

document.write(result);
