"use strict"; // here we go again

console.log("gallery");
import { getImages } from "./getData.js";
const loadBtn = document.getElementById("btn");
let lastId = 9;
let first50;

// gauti pirmus 9
// gaunam po 3
// 10 - 12,  // 9 + 1 - 9 + 3
// 13 - 15,  // 12 +1 - 12 + 3
// 16 - 18

getImages((data) => {
  first50 = data.splice(0, 50);
  console.log(first50);
  generateImagesOnHtml(first50.filter((o) => o.id <= 9));
});

function generateImagesOnHtml(data) {
  //   console.log("generating", data);
  console.table(data);
}

loadBtn.addEventListener("click", () => {
  //                                                  9                   12
  generateImagesOnHtml(first50.filter((o) => o.id > lastId && o.id <= lastId + 3));
  // 9 + 3 = 12
  lastId += 3;
  //   generateImagesOnHtml(first50.filter(o => o.id > 12 && o.id <= 15));
});
