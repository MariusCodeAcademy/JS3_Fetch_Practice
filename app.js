/**
 * 1 atvaizduoti userius is api
 * saraso pavidalu kuriame yra username ir email
 *
 * 1.1 gauti pilna useriu info is api i console log
 *
 * 1.2 atrinkti tik reikalingus duomenis ir atvaizduoti saraso pavidalu
 *
 *
 * 2 saraso elementai turi butipaspaudziami ir paspaudus mes
 * atvaizduosim visa userio informacija puslapio desineje
 *
 * 2.1 gauti paspausto userio id
 *
 * 2.2 atlikti nauja fetch requesta i api ir gauti useri su nurodytu id
 * pvz https://jsonplaceholder.typicode.com/users/5
 *
 *
 * 3 parisiusti todo objektus nuo 41 iki 57
 * https://jsonplaceholder.typicode.com/todos
 * kiekvienam prideti po papildoma savybe "letterCount" kuri nusako kiek
 * raidziu yra tame todo
 *
 * 3.1  gautus todo isrikiuoti pagal atliktu ir neatliktu statusa
 * // neatlikti rodomi pirmi
 *
 * 3.2 suskaiciuoti kiek todo yra atliktu kiek ne, grazinti atsakyma
 * objekto pavidalu pvz: { done: 45, notDone: 34 }
 *
 *
 * 4 susikurti atskira html faila gallery.html
 *
 * 4.1 atvaizduoti 9 paveikslelius  po 3 per eilute su antraste po paveiksleliu
 * paveiksleliu traukiam is https://jsonplaceholder.typicode.com/photos
 *
 * 4.2 tureti mygtuka load more kuris uzkrauna papildomai dar po viena eile
 * paveiksleliu. uzkrauti ir prideti tik naujus neperrasant jau esanciu
 *
 * 4.3 padaryti mygtuka 'reset' kuris paliktu galerijoj tik pirmus
 * 9 paveikslelius
 *
 * 4.4 padaryti mygtuka kuris paslepia visus pavadinmus po paveiksleliais
 * 'pic only' btn
 *
 *
 *
 *
 *
 */

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
    userInfoEl.innerHTML = `<p>Name: ${user.name}</p>`;
  });
  // jei paspaudziau ant id 6
  // turiu siusti uzklausa
  //https://jsonplaceholder.typicode.com/users/6
}

// 3 parisiusti todo objektus nuo 41 iki 57
let urlTodo = "https://jsonplaceholder.typicode.com/todos";

fetchData(urlTodo, getCorrectTodos);

function getCorrectTodos(todoArr) {
  console.log("correct", todoArr);
  const filteredTodos = todoArr.filter((oneTodo) => "<salyga>");
  console.log("filteredTodos", filteredTodos);
}
// console.clear();
let karen = getOneUser("https://jsonplaceholder.typicode.com/users/4");

console.log("karen", karen);
