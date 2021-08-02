/*
const user = {
  name: "nico",
  age: 24,
  password: 12345,
  country: "EN",
};

// 속성 지우기
const killpassword = ({ country, ...rest }) => rest;

const cleanUser = killpassword(user);

console.log(cleanUser);

// 추상적인 user 자료구조에서 password 라는 속성을 흔적도 없이 지우는
// rest와 destructing 을 이용한 예제

// 기본값 설정하기

const setCountry = ({ country = "KR", ...rest }) => ({ country, ...rest });

console.log(setCountry(user));
*/

const user = {
  NAME: "chansoo",
  age: 24,
  password: 123465,
};

const rename = ({ NAME: name, ...rest }) => ({ name, ...rest });

console.log(rename(user));
