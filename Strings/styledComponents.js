// styled compoents
// js 에서 css 를 사용하게 해줌.
// html 을 얻을 수 있음.

const styled = (aElement) => {
  const el = document.createElement(aElement);
  return (args) => {
    const styles = args[0];
    el.style = styles;
    return el;
  };
};

const title = styled("h1")`
  border-radius: 10px;
  color: blue;
`;

const subtitle = styled("span")`
  color: green;
`;

title.innerText = "It is title";
subtitle.innerText = "it is subtitle";

document.body.append(title, subtitle);

console.log(title);

// 근데 유용한지는 잘 모르겠음...
