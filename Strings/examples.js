// includes() 메서드
// 해당 문자열에 인자로 넣는 값이 있으면 true 반환.
/*
const isEmail = (email) => email.includes("@");

console.log(isEmail("cows0511@gmail.com"));
*/

// repeat() 메서드
// 해당 문자열에 인자로 넣는 숫자에 따라 반복해서 반환해줌.
/*
const CC_NUMBER = "6060";

const displayName = `${"*".repeat(10)}${CC_NUMBER}`;

console.log(displayName);
*/

// startsWith() 메서드 및 endsWith() 메서드
// 해당 문자열에 인자로 넣는 값이 문자열의 시작/끝 이라면 True 반환.

const names = "Mr.Nicolas";
console.log(names.startsWith("Mr"));
console.log(names.endsWith("Nicolas"));

// 입력 유효성 검사에 유용한 메서드 들이다.
// includes 는 @가 포함되었는지
// endsWith 는 .com이 포함되었는지 검사가 가능하다.
