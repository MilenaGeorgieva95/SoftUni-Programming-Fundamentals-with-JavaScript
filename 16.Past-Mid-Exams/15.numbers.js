function numbers(input) {
  let arr = input
    .split(" ")
    .map((el) => Number(el))
    .sort((a, b) => b - a);

  let sum = 0;

  arr.forEach((el) => (sum += el));
  let average = sum / arr.length;

  let selection = arr.filter((el) => el > average);
  if (selection.length < 1) {
    console.log("No");
  } else {
    let result = selection.slice(0, 5);
    console.log(result.join(" "));
  }
}

numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
