const lo_dash = require("lodash");

function chunkArr() {
  let arr1 = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  console.log(lo_dash.chunk(arr1, 3));
}

function tailArr() {
  let arr2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  console.log(lo_dash.tail(arr2));
}

function unionArr() {
  let arr3 =lo_dash.union(
    [23, 54, 57],
    [34, 23, 45],
    [89, 57, 45],
    [23, 89, 32],
    [54, 87, 17],
  );
  console.log(arr3);
}

function fromPairArr(){
    let arr4=[["vegetables","pumpkin"],["fruits","mango"],["car","lamborghini"],["country","india"]]
    console.log(lo_dash.fromPairs(arr4))
}

module.exports.chunkArr = chunkArr;
module.exports.tailArr = tailArr;
module.exports.unionArr = unionArr;
module.exports.fromPairArr = fromPairArr;
