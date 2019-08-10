var predictPartyVictory = function(senate) {
  const disableHash = {
      R: 'D',
      D: 'R'
  };
  
  const printHash = {
      R: 'Radiant',
      D: 'Dire'
  }
  
  let nowIndex = 0;
  let disableIndex = senate.indexOf(disableHash[senate[nowIndex]]);
  
  while (disableIndex !== 0 && disableIndex !== -1) {
    console.log('before -------', disableIndex, nowIndex, senate)

      senate = senate.slice(0, disableIndex) + senate.slice(disableIndex + 1);
      if (++nowIndex >= senate.length) {
          nowIndex = 0;
      }
      disableIndex = senate.slice(nowIndex + 1).indexOf(disableHash[senate[nowIndex]]) + nowIndex + 1 || senate.indexOf(disableHash[senate[nowIndex]])
      console.log(disableIndex, nowIndex, senate)
  }
  
  return printHash[senate[nowIndex]];
};

predictPartyVictory("RDD")