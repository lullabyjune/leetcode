/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  //  看题解写的
  //  说实话一开始看到图，最短路径，我想到的是地杰斯特拉的那个算法- - ，然后觉得，好复杂，就没继续看了- -
  //  后来发现。。。好像和树的BFS差不太多。。。反正都是队列操作
  //  对于这个题而言唯一比较特殊的就是这个预处理，反正这个我是怎么都没想到的。。学到了

  //  执行用时 :176 ms, 在所有 JavaScript 提交中击败了98.18%的用户
  //  内存消耗 :56.9 MB, 在所有 JavaScript 提交中击败了11.11%的用户

  let wordLength = beginWord.length;
  let allComboDict = new Map(); //  Map<string, string[]>
  let visitedSet = new Set(); //  Set<string>
  let queue = [];

  for (let word of wordList) {
    for (let i = 0; i < wordLength; i++) {
      let tmpWord = `${word.substring(0, i)}*${word.substr(i + 1)}`;

      let currentMap = allComboDict.get(tmpWord) || [];

      currentMap.push(word);

      allComboDict.set(tmpWord, currentMap);
    }
  }

  queue.push({
    node: beginWord,
    level: 1
  });

  visitedSet.add(beginWord);

  while (queue.length) {
    let node = queue.shift();

    for (let i = 0; i < wordLength; i++) {
      let tmpWord = `${node.node.substring(0, i)}*${node.node.substr(i + 1)}`,
        combos = allComboDict.get(tmpWord);

      if (!combos) continue;

      for (let word of combos) {
        if (word === endWord) return node.level + 1;

        if (!visitedSet.has(word)) {
          queue.push({
            node: word,
            level: node.level + 1
          });

          visitedSet.add(word);
        }
      }
    }
  }

  return 0;

  //  暴力解，没做出来，
  //  看了一眼题解是 图的BFS，就溜了溜了，毕竟还没做过图，QAQ
  //  emmmm下午开始吧（但愿=-=），把图挨着做一遍。。

  // if (!wordList.find(word => word === endWord)) return 0;

  // let count = Number.MAX_SAFE_INTEGER;
  // let wordLength = beginWord.length;

  // const filter = (aimStr, totalStr) => {
  //   let results = [];

  //   for (let str of totalStr) {
  //     let diffCount = 0;

  //     for (let i = 0; i < wordLength; i++) {
  //       if (str[i] !== aimStr[i]) {
  //         if (++diffCount > 1) {
  //           continue;
  //         }
  //       }
  //     }

  //     results.push(aimStr);
  //   }

  //   return results;
  // };

  // const changeWord = (currentWord, wordList, currentCount) => {
  //   if (currentWord === endWord) {
  //     count = Math.min(currentCount, count);

  //     return;
  //   }

  //   let canChange = filter(currentCount, wordList);

  //   for (let word of canChange) {
  //     changeWord(word, wordList, currentCount + 1);
  //   }
  // };

  // changeWord(beginWord, wordList, 1);

  // return count === Number.MAX_SAFE_INTEGER ? 0 : count;
};

let beginWord = "qa";
let endWord = "sq";
let wordList = [
  "si",
  "go",
  "se",
  "cm",
  "so",
  "ph",
  "mt",
  "db",
  "mb",
  "sb",
  "kr",
  "ln",
  "tm",
  "le",
  "av",
  "sm",
  "ar",
  "ci",
  "ca",
  "br",
  "ti",
  "ba",
  "to",
  "ra",
  "fa",
  "yo",
  "ow",
  "sn",
  "ya",
  "cr",
  "po",
  "fe",
  "ho",
  "ma",
  "re",
  "or",
  "rn",
  "au",
  "ur",
  "rh",
  "sr",
  "tc",
  "lt",
  "lo",
  "as",
  "fr",
  "nb",
  "yb",
  "if",
  "pb",
  "ge",
  "th",
  "pm",
  "rb",
  "sh",
  "co",
  "ga",
  "li",
  "ha",
  "hz",
  "no",
  "bi",
  "di",
  "hi",
  "qa",
  "pi",
  "os",
  "uh",
  "wm",
  "an",
  "me",
  "mo",
  "na",
  "la",
  "st",
  "er",
  "sc",
  "ne",
  "mn",
  "mi",
  "am",
  "ex",
  "pt",
  "io",
  "be",
  "fm",
  "ta",
  "tb",
  "ni",
  "mr",
  "pa",
  "he",
  "lr",
  "sq",
  "ye"
];

console.info(ladderLength(beginWord, endWord, wordList));
