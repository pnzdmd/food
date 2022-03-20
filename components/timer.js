export default function times() {
  
  const deadline = '2022-12-31';
  
  function getTimeRemaining(endtime) {
    // получаю разницу в милисекундах в t
    const t = Date.parse(endtime) - Date.parse(new Date());
    // получаю округленное количество суток
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    // получаю округленное количество часов
    const hours = Math.floor((t / (1000 * 60 * 60) % 24));
    // получаю округленное количество минут
    const minutes = Math.floor((t / 1000 / 60) % 60);
    // получаю округленное количество секунды
    const seconds = Math.floor((t / 1000) % 60);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  // подставляю ноль впереди суток и часов
  function getZero(num) {
    if(num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }


  // обновление на странице
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');

    // для обновления таймера каждую секунду
    const timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.textContent = getZero(t.days);
      hours.textContent = getZero(t.hours);
      minutes.textContent = getZero(t.minutes);
      seconds.textContent = getZero(t.seconds);

      // остановка таймера если время вышло
      if(t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock('.timer', deadline);
}