(function flexible(window, document) {
  var docEl = document.documentElement;
  var dpr = window.devicePixelRatio || 1;
  function setBodyFontSize() {
    if (document.body) document.body.style.fontSize = docEl.clientWidth / 24 + "px";
    else document.addEventListener("DOMContentLoaded", setBodyFontSize);

  }
  setBodyFontSize();
  function setRemUnit() {
    var rem = docEl.clientWidth / 24;
    docEl.style.fontSize = `${rem}px`;
  }
  setRemUnit();
  window.addEventListener("resize", setRemUnit);
  window.addEventListener("pageshow", e => {
    if (e.persisted) setRemUnit();
  });
  if (dpr >= 2) {
    var fakeBody = document.createElement("body");
    var testElement = document.createElement("div");
    testElement.style.border = ".5px solid transparent";
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) docEl.classList.add("hairlines");
    docEl.removeChild(fakeBody);
  }
})(window, document);