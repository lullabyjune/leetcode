/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let current = [0, 0, 0]; //  refers to [5, 10, 20]

  for (let bill of bills) {
    let diff = bill - 5;

    switch (diff) {
      case 0:
        current[0] += 1;
        break;
      case 5:
        current[0] -= 1;
        current[1] += 1;
        break;
      case 15:
        current[2] += 1;

        if (current[1] > 0) {
          current[1] -= 1;
          current[0] -= 1;
        } else {
          current[0] -= 3;
        }
    }

    if (current.some(item => item < 0)) return false;
  }

  return true;
};
