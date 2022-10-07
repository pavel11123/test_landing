
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

const slider = () => {
  $(document).ready(function () {
    $(".slider").slick({
      slidesToShow: 3,
      autoplay: false,
      speed: 1000,
      infinity: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });
};

slider();

const time = () => {
  const startingMMinutes = 30;
  let time = startingMMinutes * 60;

  const countdown = document.getElementById("countdown");

  setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdown.innerHTML = `${minutes}:${seconds}`;

    if (minutes == 0 && seconds == 00) {
      setInterval(stopCount, 1000);
    } else {
      time--;
    }
  }

  function stopCount() {
    document.getElementById("countdown").style = "font-size: 30px;";
    document.getElementById("countdown").innerText = "Акция завершена";
  }
};

time();

const animationText = () => {
  jQuery(document).ready(function () {
    $(".new__price").mousemove(function (e) {
      var rXP = e.pageX - this.offsetLeft - $(this).width() / 2;
      var rYP = e.pageY - this.offsetTop - $(this).height() / 2;
      $(".new__price").css(
        "text-shadow",
        +rYP / 10 +
          "px " +
          rXP / 80 +
          "px rgba(227,6,19,.8), " +
          rYP / 8 +
          "px " +
          rXP / 60 +
          "px rgba(255,237,0,1), " +
          rXP / 70 +
          "px " +
          rYP / 12 +
          "px rgba(0,159,227,.7)"
      );
    });
  });
};

animationText();
