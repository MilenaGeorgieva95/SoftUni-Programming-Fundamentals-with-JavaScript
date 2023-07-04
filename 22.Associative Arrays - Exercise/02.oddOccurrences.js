function oddOccurrences(input) {
  let wordArr = input.split(" ").map((el) => el.toLowerCase());

  let obj = {};

  for (let word of wordArr) {
    if (obj.hasOwnProperty(word)) {
      obj[word]++;
      continue;
    }
    obj[word] = 1;
  }

  let arrOfOddEls = Object.entries(obj)
    .filter((double) => double[1] % 2 !== 0)
    .sort((a, b) => b[1] - a[1]);

  let result = "";

  for (let arr of arrOfOddEls) {
    result += arr[0] + " ";
  }
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
