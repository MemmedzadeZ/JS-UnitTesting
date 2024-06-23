import { MyString } from "../js/classes/MyString";
import { MyDate } from "../js/classes/MyDate";

const myString = new MyString("Hello");
const myDate = new MyDate();

it("Test", () => {
  expect(myString.toggle()).toBe("SAlaMM");
  expect(myString.toggle()).toBe("zehra");
  expect(myString.counter("s")).toBe(2);
  expect(myString.insert(0, "a")).toContain("a");
  expect(myString.remove(1));
});

it("Testing Dates", () => {
  expect(myDate.isLeapYear()).toBeTruthy();
});
