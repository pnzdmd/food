export default function modal() {
  const modalTrigger = document.querySelectorAll('[data-modal]');
  const modal = document.querySelector('.modal');
  //const modalCloseBtn = document.querySelector('[data-close]');


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
  //modalCloseBtn.addEventListener('click', closeModal);

  // закрытие модального окна по клику на оверлей
  modal.addEventListener('click', (evt) => {
    if (evt.target === modal || evt.target.getAttribute('data-close') == '') {
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
  const modalTimerId = setTimeout( openModal, 50000);

  // открытие модального окна в конце страницы
  function showModalbyScroll() {
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      // что бы модальное окно не открывалось каждый раз в конце страницы
      window.removeEventListener('scroll', showModalbyScroll);
    }
  }

  window.addEventListener('scroll', showModalbyScroll);
}