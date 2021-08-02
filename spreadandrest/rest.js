const bestFriendMaker = (firstOne, ...potato) => {
  console.log(`My best Friend is ${firstOne}`);
  console.log(potato);
};

bestFriendMaker("nico", "lynn", "dall", "japan guy");

// REST 의 개념은 남겨진 것이다.
// 똑같이 sperad 사용했지만, 여기서는 예시로 어떤 함수의 입력값이 1개 들어오면
// 그 입력값을 출력하고 나머지 입력된 값을 ...연산자를 이용해서
// 하나의 리스트로 만들었다
// ... 연산자는 분해를 할 때도 사용하지만 나머지를 전부 다 합쳐서 하나의 리스트로
// 만들때도 사용이 가능한 것 같다.
