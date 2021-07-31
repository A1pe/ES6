/*
const wrapper = document.querySelector(".wrapper");

const addWelcome = () => {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.innerText = "Hello";
  div.append(h1);
  wrapper.append(div);
};

setTimeout(addWelcome, 5000);
*/
// 복습을 위한 메모
// querySelector 메서드를 이용해서 wrapper 이라는 객체에 wrapper 이라는 클래스를 지닌 태그를 매칭시킨다
// addWelcome 이라는 함수는 arrow function 이고, 인자 및 리턴값은 없다.
// 해당 addWelcone 이라는 함수는 div 태그를 만들어서 div 라는 이름의 객체에 할당하고
// h1 태그를 만들어서 h1이라는 이름의 객체에 할당한다.
// h1 이라는 객체에는 innerText 라는 객체가 지닌 변수에 문자열을 기입한다.
// div 라는 객체는 append 메서드를 통해 h1 이라는 태그를 내부에 가게 되고
// 실제로 html 문서에 있는 wrapper 클래스를 가진 wrapper 객체에는 div 라는 이름을 가진 객체에 해당하는 태그를 가지게 된다.
// 그리고 setTimeout 라는 함수를 이용하여 시간의 경과에 따라
// addWelcome 함수가 동작하게 한다.
// 아마 콜백함수 일 것.

// 위의 방식의 함수는 정말 길다. 그냥 h1태그 div 태그 만든것뿐인데.

// 만약 templete literal을 사용한다면 훨-씬 쉽게 html코드 작성이 가능하다.

//예시
/*
const wrapper = document.querySelector(".wrapper");

const addWelcome = () => {
  const div = `
    <div class="Hello">
        <h1 class = "title">Hello</h1>
    </div>
    `;
  wrapper.innerHTML = div;
};
setTimeout(addWelcome, 2000);
*/
// 이런 것을 Html Fragments 라고 부른다. 오직 backtick 을 사용해야만 줄바꿈을 지원해준다.

// 이딴 짓거리도 가능하다.
/*console.log(`


                                    H           ElloW




`);
*/
