/*
function a() {
  console.log("A");
}
a();*/
const a = function () {
  console.log("A");
};

const slowfunc = function (callback) {
  callback();
};

setTimeout(a, 3 * 1000);
