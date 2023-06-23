function requiredReading(pagesPerBook, pagesPerHour, days) {
  let hoursTotal = pagesPerBook / pagesPerHour;
  let hoursPerDay = hoursTotal / days;
  console.log(hoursPerDay);
}
