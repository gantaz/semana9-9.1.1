// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

const stringArray = strangeArray.filter(item => typeof item === "string").sort((a, b) => a.localeCompare(b));;

function showList(array) {
  
  const container = document.getElementById("list");
  container.innerHTML = "";
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {

  showList(strangeArray.filter(item => typeof item === "string").sort((a, b) => a.localeCompare(b)));
  
});
 /*Descubri dos formas de resolver el ejercicio, 1 es poniendo el filtro directamente en el parametro de la funcion para que te lo aplique,
y la otra es declarando otro array a base de strangeArray y filtrando con el mistro filtro utilizado en el metodo 1
 */