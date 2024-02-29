// API 통신 : 퍼블리셔 VS 프론트엔드
// JSON : Javascript Object Notation
// 자바스크립트 객체 표기법
// ToDoList => Localstorage Web API
// data 저장 / 꺼내오고 / 편집 / 삭제
// Server
// JSON.stringify()
// JSON.parse()

// {
//   name: "홍길동";
//   major: "컴퓨터공학";
//   grade: 2;
// }

// AJAX : 웹 & 서버의 비동기 네트워크 통신
// Asynchronous Javascript And XML

// 웹 & 서버 비동기 네트워크 통신 방법
// 1) fetch()
// 2) XMLHttpRequest()

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "students.json", true);
// xhr.send();

// readyState : 0 -> 1 -> 2 -> 3 -> 4
// 0: 클라이언트가 서버측에 아무런 요청을 하지 않은 상태
// 1: 클라이언트가 서버로 자료를 요청하고 성공한 상태
// 2 : 클라이언트가 서버에 자료를 요청한 이후에 서버가 클라이언트에 응답을 한 상태
// 3 : 서버가 클라이언트에게 자료를 전송중인 상태
// 4 : 서버가 클라이언트에게 자료를 모두 전송하고, 이제 웹에서 해당 자료를 처리할 수 있게 된 상태

// 이벤트 핸들러 onclick

// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     let students = JSON.parse(xhr.responseText);
//     document.write(`${students.name} 학생은 ${students.grade} 학년입니다.`);
//   }
// };

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "students.json", true);
// xhr.send();

// const renderHTML = (contents) => {
//   let output = "";
//   for (let content of contents) {
//     output += `
//       <h2>${content.name}</h2>
//       <ul>
//         <li>전공 : ${content.major}</li>
//         <li>학년 : ${content.grade}</li>
//       </ul>
//       <hr/>
//     `;
//   }
//   document.write(`${output}`);
// };

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     let students = JSON.parse(xhr.responseText);
//     renderHTML(students);
//   }
// };

// 예외처리
// try문 / catch문 / finally문
// 정상적으로 클라이언트 & 서버 소통이 이루어지고 있을 때
// 오류가 발생했을 때
// try || catch => 클라이언트 & 서버 통신!!!

// try {
//   console.log("시작");
//   add();
// } catch (err) {
//   console.log(`오류발생 : ${err}`);
// } finally {
//   console.log("끝");
// }

// let json = '{"grade": 3, "age": 25}';

// try {
//   let user = JSON.parse(json);
//   if (!user.name) {
//     throw "사용자 이름이 없습니다!";
//   }
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("통신종료!");
// }

fetch("students.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";
    json.forEach((student) => {
      output += `
        <h2>${student.name}</h2>
        <ul>
          <li>전공 : ${student.major}</li>
          <li>학년 : ${student.grade}</li>
        </ul>
        <hr/>
      `;
    });

    document.write(`${output}`);
  });

// 내용 => 자료구조 & 알고리즘
// API 내용 => 데이터
// 기상 & 카카오
// 비동기 & 동기
// heap & stack
// 이벤트 (DOM)
//
