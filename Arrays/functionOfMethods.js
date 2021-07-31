// array 관련 메서드를 적을 것. 추가된 기능이 많다.
/*
//array.of
// 기본적인 array 선언.
const friends = ["nico", "lynn", "dal", "mark"];

// array.of 를 이용한 array 선언.
const friendsof = Array.of("nico", "lynn", "dal", "mark");
*/

/*
// array.from

const buttons = document.querySelectorAll("button");
// nodelist 를 가져옴.
const hayhay = document.querySelector("#hayhay").children;
// div 10개를 자식으로 가진 div를 불러와서 자식 div를 값으로 넣음
// 이것은 html collection 으로 분류됨. (array-like object)

const realArrayButtons = Array.from(buttons);
const realhay = Array.from(hayhay);

console.log(hayhay);
console.log(buttons);
console.log(realhay);
console.log(realArrayButtons);

// array-like object 에 대한 이해가 필요하다.
// 자바스크립트에는 유사 배열이라는 것이 있다.
// 우리가 흔히 말하는 배열과의 차이점은 이 유사배열이 C의 배열처럼 index를 정해야 사용이 가능한 점이다.
// 크기가 가변적인게 아니라 정해져 있는 것이다.
// 이렇게 쓰고보니 자바스크립트의 배열은 리스트에 가까운거 같다.
// 아무튼 html의 원소를 가져올 때 유사 배열 또는 리터럴 값으로 가지고 온다.
// 이것은 배열의 메서드를 사용할 수 없는 큰 단점을 가지고 있는데,
// 이 유사배열을 배열로 만들어 주는 메서드가 바로 array.from 메서드 이다.
// 해당 메서드의 인자로 유사배열을 입력한다면, 배열을 리턴해준다.
*/
// array.find() 메서드
// 해당 메서드는 인자로 넣어지는 값이 true가 될 경우,
// 해당 array의 인자를 반환한다.
// 즉 조건문이나 true를 반환하는 메서드를 이용하면
// 특정한 배열을 반환할 수 있다.
/*
const friends = [
  "nico@gmail.com",
  "lynn@naver.com",
  "dal@yahoo.com",
  "mark@hotmail.com",
  "flynn@gorea.com",
];

//includes() 메서드를 조건으로 사용한 find 메서드의 활용
//const target = friends.find((friend) => friend.includes("@korea.com"));
//console.log(target);

// 물론 해당 배열의 값이 아니라 index 값을 원할 때도 있다.
// 그리고 해당 인덱스를 이용해서 값을 수정 할 수도 있을 것이다.
let check = friends.find((friend) => friend.includes("gorea.com"));
let target = friends.findIndex((friend) => friend.includes("@gorea.com"));
console.log(check);
// 잘못된 부분을 검색하고
const username = friends[target].split("@")[0];
// 해당 부분에서 사용할 부분은 잘라서 변수에 담아둔뒤
const email = "korea.com";
// 고칠 부분은 새로 만들고
console.log(`${username}@${email}`);
friends[target] = `${username}@${email}`;
// 두 변수를 합쳐서 사용한다.
check = friends.find((friend) => friend.includes("gorea.com"));
target = friends.findIndex((friend) => friend.includes("@gorea.com"));
// 마지막으로 검사
console.log(check, "잘못된 값이 없다면 undefined로 표시됩니다.");
console.log(target, "false는 -1로 반환됩니다.");
*/

// array.fill() 메서드

// array의 값을 채워줌. 처음 index 부터 마지막 index 까지 고정 값으로
/*
const friends = [
  "nico@gmail.com",
  "lynn@naver.com",
  "dal@yahoo.com",
  "mark@hotmail.com",
  "flynn@gorea.com",
];

const check = () =>
  friends.findIndex((friend) => friend.includes("@gorea.com"));
// 인덱스를 찾는데, 어떤 배열의 값에 @gorea.com 이라는 값이 있으면 1을 반환함.
// 그리고 인덱스 값을 check 에 반환함.
let target = check();
// target 이라는 변수에는 특정한 배열의 값을 검사하는 로직이 담겨있음.
// 검사하는 값과 일치하면 해당 값의 인덱스가. 일치하지 않으면 -1이 들어갈 것.

if (target !== -1) {
  // 여기서 한번 더 꼬아서, 값이 일치하는 경우의 수를 체크.
  // -1 이 아닌 경우는 값이 일치하는 경우밖에 없기 때문.
  friends.fill("*".repeat(5), target);
  // 값이 일치하는 놈은 * 5개로 채워버림.
}

friends.fill("*".repeat(5), 1, 3);
// 아니면 이렇게 start 와 end 포인트를 지정해서 해당 값을 채울수도 있음.

console.log(friends);
*/

// array.includes()
// 해당 배열이 includes의 인자로 넣는 값을 가지고 있다면 true를
//아니면 false를 반환함.
