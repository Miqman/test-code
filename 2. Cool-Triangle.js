const input = 8;

function coolTriangle(str) {
  for (let i = 1; i <= str; i++) {
    let paternTriangle = "";
    for (let j = 0; j < i; j++) {
      if (i === str) {
        paternTriangle += "*";
      } else {
        if (j === 0 || j === i - 1) {
          paternTriangle += "*";
        } else {
          paternTriangle += " ";
        }
      }
    }
    console.log(paternTriangle);
  }
}

coolTriangle(input);
