/*
old case

const names = ["찬수", "동민", "지혜", "동영"];

function addStar(item) {
  return item + "★";
}

const stars = names.map(addStar);

console.log(stars);

*/

const names = ["찬수", "동민", "지혜", "동영"];

// const stars = names.map(item => {return item + "★"});
// 중괄호가 포함된 보다 안정적으로 보이는 arrow function

const stars = names.map((item) => item + "★");
// implicit return. 화살표 뒤에 뭘 적든 리턴된다는 의미

console.log(stars);
