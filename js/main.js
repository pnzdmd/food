import { MenuCard } from './MenuCard.js';

window.addEventListener('DOMContentLoaded', () => {
  // Tabs
  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');
  const tabsParent = document.querySelector('.tabheader__items');


  function hideTabContent() {
    tabsContent.forEach(item => {
      //скрыл все табы
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
      //item.style.display = 'none';
    });
    //удаляю у всех табов класс активности
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  //добавляю видимость таба и класс активности всем табам
  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();


  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if(target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if(target === item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });


  /////////////////////////////////Timer

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



  ///////////////////////////// Modal

  const modalTrigger = document.querySelectorAll('[data-modal]');
  const modal = document.querySelector('.modal');
  const modalCloseBtn = document.querySelector('[data-close]');


  //открытие модального окна
  function openModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
    // модальное окно не откроется через опреденное время после открытия
    clearInterval(modalTimerId);
  }
  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });


  // закрытие модального окна
  function closeModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = '';
  }
  modalCloseBtn.addEventListener('click', closeModal);

  // закрытие модального окна по клику на оверлей
  modal.addEventListener('click', (evt) => {
    if (evt.target === modal) {
      closeModal();
    }
  });

  // закрытие модального окна нажатием Esc
  document.addEventListener('keydown', (evt) => {
    if(evt.code === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  });
  
  // открытие модального окна через опреденное время
  const modalTimerId = setTimeout( openModal, 3000);

  // открытие модального окна в конце страницы
  function showModalbyScroll() {
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      // что бы модальное окно не открывалось каждый раз в конце страницы
      window.removeEventListener('scroll', showModalbyScroll);
    }
  }

  window.addEventListener('scroll', showModalbyScroll);



  ////////////////////////// class для карточек

  const vegy = new MenuCard(
    "img/tabs/elite.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container',
    'menu__item'
  ).render();

  const elite = new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню "Премиум"',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    5,
    '.menu .container',
    'menu__item'
  ).render();

  const post = new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    4,
    '.menu .container',
    'menu__item'
  ).render(); 
});