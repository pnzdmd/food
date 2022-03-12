window.addEventListener('DOMContentLoaded', () => {

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


  
});