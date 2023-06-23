function pointsValidation(arrNums) {
  let x = 0;
  let y = 0;
  let x1 = arrNums[0];
  let y1 = arrNums[1];
  let x2 = arrNums[2];
  let y2 = arrNums[3];

  let distanceFormula = function (point1, point2, point3, point4) {
    return Math.sqrt(
      Math.pow(point1 - point3, 2) + Math.pow(point2 - point4, 2)
    );
  };

  let firstPoint = distanceFormula(x1, y1, x, y);
  let secondPoint = distanceFormula(x2, y2, x, y);
  let firstToSecond = distanceFormula(x1, y1, x2, y2);

  let printResult = function (pointsDistance, num1, num2, num3, num4) {
    if (Number.isInteger(pointsDistance)) {
      result = "is valid";
    } else {
      result = "is invalid";
    }
    return `{${num1}, ${num2}} to {${num3}, ${num4}} ${result}`;
  };

  console.log(printResult(firstPoint, x1, y1, x, y));
  console.log(printResult(secondPoint, x2, y2, x, y));
  console.log(printResult(firstToSecond, x1, y1, x2, y2));
}

pointsValidation([3, 0, 0, 4]);
