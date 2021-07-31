/*

Default 값 설정 기능이 적용되기 전의 자바스크립트

function sayHi(aName) {
  return "Hello" + (aName || "anon");
}
*/

/*

Default 값 설정 기능을 사용하고 난 뒤의 자바스크립트

function sayHi(aName = "anon") {
  return "Hello" + aName;
}
*/
/*

Default 값과 arrow function을 적용한 자바스크립트

const sayHi = (aName = "anon") => "Hello" + aName;

console.log(sayHi());
*/
