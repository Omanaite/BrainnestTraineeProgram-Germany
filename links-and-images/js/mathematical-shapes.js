function findDiagonal(s) {
  return Math.sqrt(2) * s;
}
var s = 6;
console.log("Diagonal: " + findDiagonal(s).toFixed(4));

function findAreaTriangle(a, b, c) {
  let perimeter = a + b + c;
  let semiPerimeter = perimeter / 2;
  let areaTriangle = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - a) *
      (semiPerimeter - b) *
      (semiPerimeter - c)
  );
  return areaTriangle;
}
var a = 5;
var b = 6;
var c = 7;
console.log("Triangle Area: " + findAreaTriangle(a, b, c).toFixed(4));

function findAreaAndCircunference(r) {
  const pi = Math.PI;
  let circumference = 2 * r * pi;
  let areaCircle = r * r * pi;
  return [circumference, areaCircle];
}
var r = 4;
let dataset = findAreaAndCircunference(r);

console.log("Circle circumference: " + dataset[0]);
console.log("Circle area: " + dataset[1]);
