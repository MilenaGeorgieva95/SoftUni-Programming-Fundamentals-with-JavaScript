//1 =>   0001
//20 => 10100
//&-----------
//0 =>  00000

function getLsb(num) {
  let mask = 1;
  let lsb = num & mask;
  console.log(lsb);
}
getLsb(20);

function numToBinary(nums) {
  let binaryNum = nums.toString(2);
  console.log(binaryNum);
}
numToBinary(20);

function getBit(number, position) {
  let mask = 1 << position;
  let lsb = number & mask;
  let result = lsb >> position;
  console.log(result);
}
getBit(8, 3);
