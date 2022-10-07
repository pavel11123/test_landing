//@prepros-append phone-menu.js
//@prepros-append slider.js
//@prepros-append time.js
//@prepros-append animation-text.js

const chanheHandler = (e) => {
  const value = e.value;
  e.value = value.replace(/\D/g, "");
};

const anchors = document.querySelectorAll('a[href^="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const goto = anchor.hasAttribute("href")
      ? anchor.getAttribute("href")
      : "body";
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
