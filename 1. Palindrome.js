const input = "kakak menjual katak dengan harga 12021";

function Palindrome(str) {
  const splitInput = str.split(" ");

  let amountPolim = 0;
  let wordPolim = [];
  let indexPolim = [];
  let invalidIndePolim = [];
  for (let i = 0; i < splitInput.length; i++) {
    let word = splitInput[i];

    let result = word.split("").reverse().join("");

    if (result === word) {
      amountPolim++;
      wordPolim.push(result);
      indexPolim.push(i);
    } else {
      invalidIndePolim.push(i);
    }
  }

  const result = `Total detected palindrome: ${amountPolim} \nPalindrome words: ${wordPolim.join(
    ","
  )} \nPalindrome index: ${indexPolim.join(
    ","
  )} \nInvalid palindrome index: ${invalidIndePolim.join(",")}`;

  return result;
}

console.log(Palindrome(input));
