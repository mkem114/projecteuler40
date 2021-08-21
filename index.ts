const limit = 1000;
var subLimit;
var recordSolutions = 0;
var recordHolder = undefined;
var numSolutions;
var p;
var c;
var b;
var a;

const isRightAngle = (a: number, b: number, c: number): boolean =>
  a * a + b * b === c * c;

for (p = 3; p <= limit; p++) {
  numSolutions = 0;

  for (c = 1; c < p; c++) {
    for (b = 1; b < c; b++) {
      a = p - c - b;
      if (a > 0) {
        isRightAngle(a, b, c) && numSolutions++;
      }
    }
  }

  if (numSolutions > recordSolutions) {
    recordHolder = p;
    recordSolutions = numSolutions;
  }
}

console.log(recordHolder);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('answer');
appDiv.innerText = `the value of p which has the most solutions first is: ${recordHolder}`;
