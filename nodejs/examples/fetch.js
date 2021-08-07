window.addEventListener("load", () => {
  const h1Tag = document.querySelector("h1");
  const webTag = h1Tag.querySelector("a");
  const lis = document.querySelectorAll("li");
  const htmlTag = lis[0].querySelector("a");
  const cssTag = lis[1].querySelector("a");
  const jsTag = lis[2].querySelector("a");
  const target = document.querySelector("#target");

  function relenderText(content) {
    fetch(`/ex/${content}`).then((response) => {
      response.text().then((text) => {
        target.textContent = text;
      });
    });
  }

  cssTag.addEventListener("click", () => relenderText("css"));
  htmlTag.addEventListener("click", () => relenderText("html"));
  jsTag.addEventListener("click", () =>
    relenderText("javascript")
  );
  webTag.addEventListener("click", () => relenderText("main"));
});
