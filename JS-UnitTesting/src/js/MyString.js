export class MyString {
  string;

  constructor(string) {
    this.string = string;
  }

  counter(sign) {
    let count = 0;
    let stringArray = this.string.split("");
    stringArray.forEach((element) => {
      if (element.toLocaleLowerCase() === sign.toLocaleLowerCase()) count++;
    });
    return count;
  }

  remove(index) {
    let stringArray = this.string.split("");
    stringArray.splice(index, 1);
    return stringArray.join("");
  }

  insert(index, sign) {
    let stringArray = this.string.split("");
    let copyArray = this.string.split("");

    stringArray[index + 1] = sign;
    stringArray.length += 1;
    for (let i = index + 2; i < stringArray.length; i++) {
      stringArray[i] = copyArray[i - 1];
    }
    return stringArray.join("");
  }

  toggle() {
    let stringArray = this.string.split("");
    for (let i = 0; i < stringArray.length; i++) {
      if (this.#isLowerCase(stringArray[i])) {
        stringArray[i] = stringArray[i].toUpperCase();
      } else {
        stringArray[i] = stringArray[i].toLowerCase();
      }
    }
    return stringArray.join("");
  }

  #isLowerCase(sign) {
    return sign === sign.toLowerCase() && sign !== sign.toUpperCase();
  }
}
