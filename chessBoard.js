const character1 = "#";
const character2 = " ";
const rows = 8;
const cols = 8;
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= cols; j++) {
    if ((i + j) % 2 === 0) {
      line += character1;
    } else {
      line += character2;
    }
  }
  console.log(line);
}
