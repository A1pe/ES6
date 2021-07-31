const email = [
  "nco@no.com",
  "naver@google.com",
  "lynn@gmail.com",
  "nico@nomad.com",
  "chse@gmail.com",
];
//arrow function 의 기능을 활용한 find 메서드 사용
/*const foundMail = email.find((item) => item.includes("@gmail.com"));
console.log(foundMail);*/

// arrow function 의 기능과 includes , filter 메서드를 활용한 필터링 효과.
/*const noGmail = email.filter((potato) => !potato.includes("@gmail"));
console.log(noGmail); */

//arrow function 기능과 foreach, split 메서드를 이용한 문자열 자르기 기능

const cleande = [];

email.forEach((email) => {
  cleande.push(email.split("@")[0]);
});

console.log(cleande);
