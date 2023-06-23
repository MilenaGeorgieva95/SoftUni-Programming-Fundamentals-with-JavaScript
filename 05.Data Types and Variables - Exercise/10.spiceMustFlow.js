function spiceMustFlow(yield) {
  let days = 0;
  let consumedByCrewPerDay = 26;
  let totalYield = 0;

  while (yield >= 100) {
    days++;
    totalYield += yield - consumedByCrewPerDay;
    yield -= 10;
  }
  if (totalYield >= consumedByCrewPerDay) {
    totalYield -= consumedByCrewPerDay;
  }

  console.log(days);
  console.log(totalYield);
}
