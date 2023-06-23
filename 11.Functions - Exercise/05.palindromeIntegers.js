function polindrome(arr) {
  for (let i = 0; i < arr.length; i++) {
    let curNumStr = arr[i].toString();
    let reverseCurNumStr = curNumStr.split("").reverse().join("");

    if (curNumStr === reverseCurNumStr) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
