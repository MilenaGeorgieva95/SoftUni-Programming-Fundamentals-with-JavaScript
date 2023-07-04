function companyUsers(input) {
  let companies = {};

  input.forEach((line) => {
    let [company, id] = line.split(" -> ");

    if (!companies.hasOwnProperty(company)) {
      companies[company] = [];
    }
    companies[company].push(id);
  });

  let sortedCompanies = Object.entries(companies);
  sortedCompanies.sort((a, b) => a[0].localeCompare(b[0]));

  for (let el of sortedCompanies) {
    console.log(el[0]);
    let set = new Set(el[1]);
    for (let id of set) {
      console.log("-- " + id);
    }
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
