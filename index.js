function isPalindrome(word) {
  // Write your algorithm here
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // check each letter to the corresonding letter from the end.
    const endIndex = word.length -1 - startIndex
    // if any letters don't match, return false
    if (word[startIndex] !== word[endIndex]) return false
    
  }
  // return value
  return true
}

/* 
  Add your pseudocode here
  That means if the 
  first letter is the same as last letter,and the second letter is the same
  as the second to last letter, etc.until we reach the middle, return true.

  iterate from the beginnig to the middle 
    check each letter to the corresponding letter from the end
    if any letters don't match, return false

    return true 

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("eve"));
}


module.exports = isPalindrome;
