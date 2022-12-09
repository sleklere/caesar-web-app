const alphabetChars = [];

for (let num of "0123456789") {
  alphabetChars.push(num);
}

for (let char of "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") {
  alphabetChars.push(char);
}

function caesar(encrypt, keyNumber, text) {
  let outputText = "";

  const shift = encrypt ? keyNumber : -keyNumber;
  const shiftedCharacters = text.split("").map((char) => {
    if (char === " ") return " ";
    return alphabetChars[
      (alphabetChars.indexOf(char) + shift) % alphabetChars.length
    ];
  });
  outputText = shiftedCharacters.join("");

  // console.log(outputText);

  return outputText;
}

export default caesar;
