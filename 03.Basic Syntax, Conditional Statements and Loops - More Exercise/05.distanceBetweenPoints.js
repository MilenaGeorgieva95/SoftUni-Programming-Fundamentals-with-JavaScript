function distanceBetweenPoints(x1, y1, x2, y2) {
  //Pythagorean Theorem
  let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return distance;
}

distanceBetweenPoints(2, 4, 5, 0);
