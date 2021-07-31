const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log(this);
  this.style.backgroundColor = "red";
});

// arrow function 은 this 키워드를 사용할 수 없다.
// 구현방식에서 자기 자신을 참조하지 않는것 같다.
