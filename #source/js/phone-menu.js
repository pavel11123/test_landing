const menu__open = () => {
  function menu__openjs() {
    document.querySelector(".phone__menu-main").classList.add("js-open__menu");
    document
      .querySelector(".phone__menu-main")
      .classList.remove("js-close__menu");
    document.getElementById("phone__menu-id-body").style.overflow = "hidden";
  }

  function menu__closejs() {
    document.querySelector(".phone__menu-main").classList.add("js-close__menu");
    document
      .querySelector(".phone__menu-main")
      .classList.remove("js-open__menu");
    document.getElementById("phone__menu-id-body").style.overflow = "visible";
  }

  const phoneOpen = document.querySelector(".js-phone__open");
  const phoneClose = document.querySelectorAll(".js-phone__close");

  for (var i = 0; i < phoneClose.length; i++) {
    phoneClose[i].addEventListener("click", menu__closejs);
  }

  phoneOpen.addEventListener("click", menu__openjs);
};

menu__open();
