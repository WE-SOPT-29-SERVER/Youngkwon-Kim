/* -------------------- */
/*   1. JSON 객체 실습    */
/* -------------------- */

// JS Object는 Key값을 따옴표로 묶지 않아도 string으로 변환  VS  JSON: 묶어줘야 함
// JS Object에서는 마지막 Property에 따옴표로 끝내도 됨  VS  JSON: 안됨
const sopt = {
  name: "WE SOPT",
  slogan: "우리가 SOPT입니다",
  part: ["plan", "design", "android", "iOS", "server", "web"],
  number: 180,
  printName: function () {
    console.log("name : ", this.name);
  },
  printNum: function () {
    console.log("number : ", this.number);
  },
};

console.log("typeof sopt : " + typeof sopt);

// + 와 , 의 차이가 무엇인지 직접 작성하면서 알아보세요 ~.~
console.log("sopt : " + sopt);
console.log("sopt : ", sopt);
console.log("sopt :" + JSON.stringify(sopt));

sopt.printName();
sopt.number = 190;
sopt.printNum();

/* -------------------- */
/*   2. JSON 배열 실습    */
/* -------------------- */

const dogs = [
  { name: "식빵", family: "웰시코기", age: 1, weight: 2.14 },
  { name: "콩콩", family: "포메라니안", age: 3, weight: 2.5 },
  { name: "두팔", family: "푸들", age: 7, weight: 3.1 },
];

console.log("dogs : " + dogs);
console.log("dogs : ", dogs);
console.log("dogs :" + JSON.stringify(dogs));

dogs.forEach(dog =>
  console.log(
    dog.name +
      "이는 종이 " +
      dog.family +
      "이고, 나이가 " +
      dog.age +
      "세입니다 ~",
  ),
);
