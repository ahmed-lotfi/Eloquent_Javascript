let character = "#";
const div = document.getElementById("traingle");

for (let i = 0; i < 7; i++) {
  console.log(character);
  div.innerHTML += character + `<br>`;
  character += "#";
}
