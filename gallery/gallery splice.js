"use strict"; // here we go again

console.log("gallery");

const loadBtn = document.getElementById("btn");

let first50;
// gauti duomenis
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((resp) => resp.json())
  .then((data) => {
    first50 = data;
    console.log(first50);
    generateImagesOnHtml(first50.splice(0, 9));
  })
  .catch((err) => console.log(err));

// gauti pirmus 9
// gaunam po 3
// 10 - 12, 15 -

function generateImagesOnHtml(data) {
  console.log("generating", data);
}

loadBtn.addEventListener("click", () => {
  console.log("click");
  generateImagesOnHtml(first50.splice(0, 3));
});
