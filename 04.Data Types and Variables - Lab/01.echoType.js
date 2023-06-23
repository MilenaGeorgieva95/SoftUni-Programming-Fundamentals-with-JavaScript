function echoType(input) {
  let type = typeof input;
  console.log(type);
  switch (type) {
    case "number":
    case "string":
      console.log(input);
      break;
    default:
      console.log("Parameter is not suitable for printing");
  }
}
echoType("str");
