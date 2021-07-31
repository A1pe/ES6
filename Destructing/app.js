// 객체가 가진 값을 사용하는 방법으로
// 해당 객체가 가진 값에 접근하는 방법이 있다.
// ex) settings.notifications.follow 처럼

// 여기선 object destructuring 을 한다.
/*
const settings = {
  color: {
    theme: "dark",
  },
};

const {
  notifications: { follow = "nope" } = {},
  color: { theme },
  notifications = "bullshit",
} = settings;
// notifications 의 follow 를 원하는데, 해당 값은 settings 에 있다.

//(변수성격) {
//    (찾는 값) ,
//    (찾는 값이 들어가져 있는 변수) : {(그 안에서 찾는 변수)}
//
//
//} = (찾는 값이 들어가있는 최상단 경로의 변수)

//가장 밖의 중괄호 안에 있는 것들은 쉼표로 구분되어 있다.
//이 구분된 값들의 이름이 해당 값에 대응되는 이름이 된다.

// 그리고 해당 값은 default 값을 가질 수 있다.
// 즉 값이 없으면 특정 값을 넘길 수 있음.
// 상위 계층이 없는 경우에도 사용이 가능함. 디폴트 값을 줌으로써.

console.log(follow);
console.log(theme);
console.log(notifications);
*/
