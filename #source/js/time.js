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
