function buildAWall(arr) {
  let sortedArr = arr.map(Number).sort((a, b) => a - b);

  let worker1 = sortedArr.shift();
  let concrete = [];
  while (worker1 < 30) {
    let daySum = 0;
    worker1++;
    daySum += 195;
    for (let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i] < 30) {
        daySum += 195;
      }
      sortedArr[i] += 1;
    }
    concrete.push(daySum);
  }

  console.log(concrete.join(", "));
  let pesosCost = 0;
  concrete.forEach((el) => (pesosCost += el * 1900));
  console.log(pesosCost + " pesos");
}

buildAWall([17, 22, 17, 19, 17]);
