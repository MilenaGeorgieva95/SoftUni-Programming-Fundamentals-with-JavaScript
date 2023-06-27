function browserHistory(obj, arr) {
  for (line of arr) {
    if (line === "Clear History and Cache") {
      obj["Open Tabs"] = [];
      obj["Recently Closed"] = [];
      obj["Browser Logs"] = [];
      continue;
    }
    let [action, page] = line.split(" ");
    if (action === "Open") {
      obj["Open Tabs"].push(page);
      obj["Browser Logs"].push(line);
    }
    if (action === "Close") {
      let pageIndex = obj["Open Tabs"].indexOf(page);
      if (pageIndex >= 0) {
        obj["Recently Closed"].push(page);
        obj["Open Tabs"].splice(pageIndex, 1);
        obj["Browser Logs"].push(line);
      }
    }
  }
  console.log(obj["Browser Name"]);
  console.log("Open Tabs: " + obj["Open Tabs"].join(", "));
  console.log("Recently Closed: " + obj["Recently Closed"].join(", "));
  console.log("Browser Logs: " + obj["Browser Logs"].join(", "));
}

browserHistory(
  {
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": [
      "Open YouTube",
      "Open Yahoo",
      "Open Google Translate",
      "Close Yahoo",
      "Open Gmail",
      "Close Gmail",
      "Open Facebook",
    ],
  },
  ["Close Facebook", "Open StackOverFlow", "Open Google"]
);
