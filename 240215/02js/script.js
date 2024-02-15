// 8.Web API > localStorage 공간 활용해서 todo 값을 저장
// 9.localStorage 저장된 값을 찾아서 ul태그에 출력해주기
// 10.완료버튼을 클릭했을 때, todo값을 localStorage & ul태그 안에서 삭제해주기

const input = document.querySelector("#todo");
const button = document.querySelector("#button");
const ul = document.querySelector("ul");

const todos = [];
const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const delItem = (e) => {
  const target = e.target.parentElement;
  target.remove();
};

const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    const span = document.createElement("span");
    span.innerText = todo.text;
    deleteButton.innerText = "삭제";
    deleteButton.addEventListener("click", delItem);
    li.appendChild(span);
    li.appendChild(deleteButton);
    ul.appendChild(li);
    li.id = todo.id;
  }
};

const handler = (e) => {
  e.preventDefault();
  const todo = {
    id: Date.now(),
    text: input.value,
  };
  todos.push(todo);
  addItem(todo);
  save();
  input.value = "";
};

button.addEventListener("click", handler);
