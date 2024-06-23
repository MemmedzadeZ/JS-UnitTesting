// Creating class MyDate :
export class MyDate {
  #date;

  constructor(date = new Date()) {
    this.#date = date;
  }

  showDate() {
    return this.#formatDate(this.#date.toLocaleDateString());
  }

  isFuture() {
    return this.#date > new Date();
  }
  isLeapYear() {
    return this.#date.getFullYear() % 4 === 0;
  }

  nextDay() {
    this.#date.setDate(this.#date.getDate() + 1);
    return this.#date.getUTCDate();
  }

  #monthToName(month) {
    const monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthName[month - 1] || "";
  }
  #dayToWords(day) {
    const dayWords = {
      1: "first",
      2: "second",
      3: "third",
      4: "fourth",
      5: "fifth",
      6: "sixth",
      7: "seventh",
      8: "eighth",
      9: "ninth",
      10: "tenth",
      11: "eleventh",
      12: "twelfth",
      13: "thirteenth",
      14: "fourteenth",
      15: "fifteenth",
      16: "sixteenth",
      17: "seventeenth",
      18: "eighteenth",
      19: "nineteenth",
      20: "twentieth",
      21: "twenty-first",
      22: "twenty-second",
      23: "twenty-third",
      24: "twenty-fourth",
      25: "twenty-fifth",
      26: "twenty-sixth",
      27: "twenty-seventh",
      28: "twenty-eighth",
      29: "twenty-ninth",
      30: "thirtieth",
      31: "thirty-first",
    };

    return dayWords[day] || "";
  }

  #formatDate(dateStr) {
    const [day, month] = dateStr.split("/").map(Number);

    const dayWord = this.#dayToWords(day);
    const monthName = this.#monthToName(month);

    return `${dayWord}/${monthName}`;
  }
}
