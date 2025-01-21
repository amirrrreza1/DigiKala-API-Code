const countDown = () => {
  let countDownDate = new Date("Jan 22, 2025 00:00:00").getTime();
  let dateNow = new Date().getTime();
  let gap = countDownDate - dateNow;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;

  const textHour = Math.floor(gap / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

const countdownElements = document.querySelectorAll<HTMLElement>(
  ".header__Banner__CountDown__hour, .header__Banner__CountDown__minute, .header__Banner__CountDown__second"
);

countdownElements.forEach((element) => {
  if (element.classList.contains("header__Banner__CountDown__hour")) {
    element.textContent = textHour.toString();
  } else if (element.classList.contains("header__Banner__CountDown__minute")) {
    element.textContent = textMinute.toString();
  } else if (element.classList.contains("header__Banner__CountDown__second")) {
    element.textContent = textSecond.toString();
  }
});

};

export default countDown;
