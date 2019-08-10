/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function(fronts, backs) {
  let length = fronts.length,
      sameCache = {},
      min = Number.MAX_SAFE_INTEGER
  
  fronts.forEach((el, index) => 
      el === backs[index] && (sameCache[el] = true)
  )
  
  if (length === Object.keys(sameCache).length)  return 0
  
  fronts.concat(backs).forEach(el => {
      if (!sameCache[el] && el < min)  min = el
  })
  
  return min === Number.MAX_SAFE_INTEGER ? 0 : min
};

let fronts = [],
    backs = []

fronts = [1, 2, 4, 4, 7]
backs = [1, 3, 4, 1, 3]

fronts = [1, 2, 1, 4, 4]
backs = [2, 3, 4, 5, 6]

console.log(flipgame(fronts, backs))