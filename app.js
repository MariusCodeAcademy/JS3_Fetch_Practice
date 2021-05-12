import { fetchData, getOneUser } from "./js/fetch.js";

const ulEl = document.getElementById("ul");
let userInfoEl = document.getElementById("user-info");
const url = "https://jsonplaceholder.typicode.com/users";

fetchData(url, generateList);

function generateList(data) {
  console.log(data);

  data.forEach((user) => {
    const li = document.createElement("li");
    li.addEventListener("click", showUserInfo);
    li.dataset.id = user.id;
    li.textContent = `${user.username}, ${user.email}`;
    ulEl.appendChild(li);
  });
}

function showUserInfo(event) {
  console.log(event.target);
  const userId = event.target.dataset.id;
  const url = "https://jsonplaceholder.typicode.com/users/" + userId;
  // getOneUser(url);
  fetchData(url, (user) => {
    // userInfoEl.innerHTML = `<p>Name: ${user.name}</p>`;
    userInfoEl.innerHTML = null;
    for (const key in user) {
      // debugger;
      // praleisti id savybe
      if (key === "id") continue;
      if (typeof user[key] === "object") user[key] = "<button>more info</button>";
      userInfoEl.innerHTML += `<p>${key}: ${user[key]}</p>`;
    }
  });
  // jei paspaudziau ant id 6
  // turiu siusti uzklausa
  //https://jsonplaceholder.typicode.com/users/6
}

// 3 parisiusti todo objektus nuo 41 iki 57
let urlTodo = "https://jsonplaceholder.typicode.com/todos";

fetchData(urlTodo, handleTodos);

function handleTodos(todoArr) {
  console.log("correct", todoArr);
  const filteredTodos = todoArr.filter(({ id }) => id >= 41 && id <= 57);

  // isviltruotam masyvui 3.1
  filteredTodos.forEach((todo) => (todo.letterCount = todo.title.length));

  console.table(filteredTodos);
}

// console.clear();
// getOneUser("https://jsonplaceholder.typicode.com/users/4");
