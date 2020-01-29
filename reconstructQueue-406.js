/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  //  我太菜了

  people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

  const newPeople = [];

  for (let item of people) {
    newPeople.splice(item[1], 0, item);
  }

  return newPeople;
};
