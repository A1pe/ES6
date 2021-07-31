// 보통 destructing기능은 데이터를 조작할때 사용한다.
// 만약 어떤 데이터를 조작하기 위해 가져온다면 object destructing 을 이용하는게 더 좋을 것이다.
// 이런 array destructing 보다. 하지만 이런 기능도 있다는 것을 알아야 할 것이다.
// 만약 사용한다면 array destructing 은 데이터를 조작하지 않을 때 사용되는 경우가 많다.
/*
const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

const [mon, tue, wed, tomato] = days;
console.log(mon,tue,wed,tomato)
*/

const days = () => ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

const [mon, tue, wed, tomato] = days();
console.log(mon,tue,wed,tomato)
// 이렇게 함수에도 사용 가능함.