const alphabetChars = [];

for (let num of "0123456789") {
  alphabetChars.push(num);
}

for (let char of "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") {
  alphabetChars.push(char);
}

let encryptOrDecrypt;

while (true) {
  console.log("------------------------------");
  encryptOrDecrypt = prompt("Enter 1(Encrypt) or 2(Decrypt):\n");
  if (encryptOrDecrypt == "1" || encryptOrDecrypt == "2") {
    break;
  } else {
    console.log("#######################################################");
    console.log("-- Please enter either 1 to encrypt, or 2 to decrypt --");
    console.log("#######################################################");
  }
}

let keyNumber;

while (true) {
  try {
    console.log("-----------------");
    keyNumber = parseInt(prompt("Enter Key Number:\n"));
    break;
  } catch (err) {
    console.log("#################################");
    console.log("-- Please enter a valid number --");
    console.log("#################################");
  }
}

let text;

while (true) {
  try {
    console.log("-------------------------------------------");
    text = prompt("Enter the text to Encrypt/Decrypt:\n");
    for (let char of text) {
      if (!alphabetChars.includes(char)) {
        throw new Error();
      }
    }
    break;
  } catch (err) {
    console.log(
      "******************************************************************"
    );
    console.log(
      "-- Please enter text that only contains alphanumeric characters --"
    );
    console.log(
      "******************************************************************"
    );
  }
}

let outputText = "";

const shift = encryptOrDecrypt == "1" ? keyNumber : -keyNumber;
const encryptedChars = text
  .split("")
  .map(
    (c) =>
      alphabetChars[(alphabetChars.indexOf(c) + shift) % alphabetChars.length]
  );
outputText = encryptedChars.join("");

console.log("-----------------");
console.log("Your result text:");
console.log(outputText);
