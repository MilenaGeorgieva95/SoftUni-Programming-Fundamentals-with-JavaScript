function adAstra(input) {
  let pattern =
    /([|#])(?<foodName>[\sA-Za-z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;

  let totalCalories = 0;
  let itemsList = [];
  let matches = input[0].matchAll(pattern);

  if (matches) {
    for (let match of matches) {
      let currentCalories = Number(match.groups.calories);
      totalCalories += currentCalories;
      let line = `Item: ${match.groups.foodName}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`;
      itemsList.push(line);
    }
  }
  let days = Math.floor(totalCalories / 2000);
  console.log(`You have food to last you for: ${days} days!`);
  itemsList.forEach((el) => console.log(el));
}

adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
