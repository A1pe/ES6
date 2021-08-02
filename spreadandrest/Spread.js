const friends = [1, 2, 3, 4];

console.log(...friends);

// spread opperator 은 자료가 담긴 구조를 해체하고 값만을 표시하는 연산자다.
// 이런 활용이 가능

const bad = ["hay", "hey", "hiyo"];

const sum = [...friends, ...bad];

console.log(sum);

// 오브젝트도 펼치는게 가능하다.

const sexy = {
  hi: "hello",
  im: "greeting",
};
const guy = {
  fine: "wellmet",
  thanks: true,
};

console.log({ ...sexy, ...guy });
