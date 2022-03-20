// Forms отправка данных на сервер

const forms = document.querySelectorAll('form');

const message = {
  loadig: 'img/.form/spinner.svg',
  success: 'Спасибо! Скоро мы с Вами свяжемся',
  failure: 'Что-то пошло нетак...'
};

forms.forEach(item => {
  postData(item);
});

function postData(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const statusMessage = document.createElement('img');
    statusMessage.src = message.loadig;
    statusMessage.style.cssText = `
      display: block;
      margin: 0 auto;
    `;
    form.insertAdjacentElement('afterend', statusMessage);


    const request = new XMLHttpRequest();
    request.open('POST', 'server.php');

    //request.setRequestHeader('Content-type', 'application/json');
    const formData = new FormData(form);

    request.send(formData);

    request.addEventListener('loqd', () => {
      if (request.status === 200) {
        console.log(request.response);
        showThanksModal(message.success);
        form.reset();
          statusMessage.remove();
      } else {
        showThanksModal(message.failure);
      }
    });
  });
}


// отрисовка формы отправки

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
      <div class="modal__content">
        <div class="modal__close" data-close>×</div>
        <div class="modal__title">${message}</div>
      </div>
    `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 4000);
  }