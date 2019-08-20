// // function getSum (sum, arr, lastIndex, resArr) {

// //   if (lastIndex >= arr.length)  return [];
// //   if (arr.slice(lastIndex).indexOf(sum) !== -1)  return [...resArr, arr.slice(lastIndex).indexOf(sum) + lastIndex]

// //   for (let i = lastIndex, length = arr.length; i < length; i++) {
// //     if (arr[i] > sum) {
// //       return [];
// //     } else {
// //       return getSum(sum - arr[i], arr, i + 1, [...resArr, i])
// //     }
// //   }
// // }

// // console.log(getSum(12, [1, 2, 3, 4, 5, 6], 0, []))

// function getRes (numbers, arr) {
//   let length = arr.length;
//   if (length < numbers) {
//       return 'False';
//   }
//   let sum = 0;
  
//   for (let i = 0; i < length; i++) {
//       sum += arr[i];
//   }
  
//   let eachOne = sum / numbers;
  
//   if (eachOne !== Math.floor(sum / numbers)) {
//       return 'False';
//   }
  
//   arr.sort((a, b) => a - b);
  
  
//   for (let i = 0; i < length; i++) {
//       if (arr[i] !== 0) {
//           let aim = eachOne - arr[i], aimIndex = arr.indexOf(aim);
//           if (aim > 0) {
//             if (aimIndex !== -1) {
//                 arr[i] = 0;
//                 arr[aimIndex] = 0;
//             } else {
//                 let aimSum = aim, aimArr;
//                 aimArr = getSum(aimSum, arr, i + 1, [i]);
//                 // console.log('aimArr: ' + aimArr)
//                 // console.log('aim:' + aimSum);
//                 // console.log('eachOne: ' + eachOne)
//                 // console.log('arr: ' + arr)
//                 if (aimArr.length === 0) {
//                     return 'False';
//                 } else {
//                     for (let j = 0, arrLength = aimArr.length; j < arrLength; j++) {
//                         arr[aimArr[j]] = 0
//                     }
//                 }
//             }
//           }
          
//       }
      
//   }
  
//   return 'True'
// }

// function getSum (sum, arr, lastIndex, resArr) {

// if (lastIndex >= arr.length)  return [];
// if (arr.slice(lastIndex).indexOf(sum) !== -1)  return [...resArr, arr.slice(lastIndex).indexOf(sum) + lastIndex]

// for (let i = lastIndex, length = arr.length; i < length; i++) {
//   if (arr[i] > sum) {
//     return [];
//   } else {
//     return getSum(sum - arr[i], arr, i + 1, [...resArr, i])
//   }
// }
// }

// console.log(getRes(5, [2, 3, 2, 3, 2, 1, 1, 1, 2, 3, 4, 1]))
console.log(Math.ceil(5 / 2))