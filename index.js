// //1
// const book = `{"title": "The Official Taylor Swift | The Eras Tour Book", "autor": "Taylor Swift", "year": "2024", "genre": "biography"}`;
// const book1 = JSON.parse(book);
// const book2 = JSON.stringify(book);

// console.log(book1);
// console.log(book2);

//2
// let nameInp = document.querySelector(".name");
// let ageInp = document.querySelector(".age");
// let p = document.querySelector("#json");
// let form = document.querySelector("#form");
// let outBtn = document.querySelector(".outBtn")

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     let userName = nameInp.value;
//     let userAge = Number(ageInp.value);
//     let allInfo = { userName, userAge };
//     let inJson = JSON.stringify(allInfo);
//     p.textContent = inJson;
// });

//3
let fs = require("node:fs");
// let outP = document.querySelector(".outp");
// let getBtn = document.querySelector(".getBtn");

//3 t
// let getJson = fs.readFileSync("./students.json", "utf8")
// let valJson = JSON.parse(getJson);
// console.log(valJson);

//4
// let getJson = fs.readFileSync("./restur.json", "utf8")
// let valJson = JSON.parse(getJson);
// console.log(valJson);

//5
let getJson = fs.readFileSync("./movie.json", "utf8")
let valJson = JSON.parse(getJson);
console.log(valJson);

// let getInfo = () => {
// let getJson = fs.readFileSync("./students.json", "utf8")
// let valJson = JSON.parse(getJson);
// console.log(valJson);
// outP.textContent = valJson;

// }

// getBtn.addEventListener("click", getInfo);



