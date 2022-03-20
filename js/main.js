import { MenuCard } from '../components/MenuCard.js';
import tabs from '../components/tabs.js';
import timer from '../components/timer.js';
import modal from '../components/modal.js';
import slider from '../components/slider.js';
import calculator from '../components/calculator.js';



tabs();
timer();
modal();
slider();
calculator();


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