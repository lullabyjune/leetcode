/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  let length = costs.length;
  let max = length / 2;
  let sum = 0;

  costs = costs.map(cost => [...cost, cost[0] - cost[1]]);

  costs.sort((a, b) => a[2] - b[2]);

  for (let i = 0; i < max; i++) sum += costs[i][0];
  for (let i = max; i < length; i++) sum += costs[i][1];

  return sum;
};
