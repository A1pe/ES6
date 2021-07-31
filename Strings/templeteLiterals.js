/*
const sayHi = (aName = "anon") => `Hello aName lovely to have you`;

console.log(sayHi());

// 백틱(``) 으로 열고 닫는다면 그 내부의 모든 것들은 문자열이 될 것이다.
*/
/*
const sayHi = (aName = "anon") => `Hello ${aName} lovely to have you`;

console.log(sayHi());

// 만약 변수명을 문자열 중간에 삽입하고 싶다면 중괄호와 $ 기호를 사용하면 된다.
// 이런 변수명이 포함된 백틱 문자열을 templete literals 라고 부른다.
// 그리고 표현식도 가능하다. 하지만 function 정의해서 사용할 수 없다.
// 사용하고 싶다면 미리 정의해서 사용해야 한다.
*/
//예시
/*
const a = 5;
const b = 3;
const add = (a, b) => a + b;

console.log(`num${a} plus num${b} is ${add(a, b)}`);
*/

const wrapper = document.querySelector(".wrapper");
const friends = ["me", "lynn", "dal", "mark"];

const list = `
    <h1>People i love</h1>
    <ul>
        ${friends.map((friend) => `<li>${friend}</li>`).join(" ")}
    </ul>
`;

wrapper.innerHTML = list;
