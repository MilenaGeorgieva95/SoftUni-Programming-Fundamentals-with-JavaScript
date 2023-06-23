function nextDays(year, month, day) {
  let nextDay = new Date(year, month - 1, day + 1);
  let newYear = nextDay.getFullYear();
  let newMonth = nextDay.getMonth();
  let newDate = nextDay.getDate();
  console.log(`${newYear}-${newMonth + 1}-${newDate}`);
}

nextDays(2016, 9, 30);
