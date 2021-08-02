const lastName = prompt("Last name");

const user = {
  username: "nico",
  age: 24,
  ...(lastName !== "" && { lastName }),
};

console.log(user);

// spread 를 이용한 선택적 데이터 입력.
// 만약 입력값이 없다면 데이터 자체가 없도록 함
