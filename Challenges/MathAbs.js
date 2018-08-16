// "Find three numbers that are the closest to eachother from three seperate arrays:
let arr1 = [75, 67, 59]
let arr2 = [50, 65, 9, 61]
let arr3 = [36, 16, 5]

const findClosestInt = (a, b, c) => {
  const arr = [...a, ...b, ...c];
  const sorted = arr.sort((a, b) => Math.abs(a - b));
  const answer = sorted.slice(0, 3);
  return answer;
}

let answer = findClosestInt(arr1, arr2, arr3);

console.log(answer);