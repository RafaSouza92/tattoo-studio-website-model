function initMObileMenu() {
  const menuBtn = document.querySelector('.menu-mobile');
  const menuMobile = document.querySelector('#menu');

  const nav = document.querySelector('nav');
  function handleMenuMobile(event) {
    menuMobile.classList.toggle('menu-ativo');
  }
  menuBtn.addEventListener('click', handleMenuMobile);
}
initMObileMenu();

function initModalGallery() {
  const modal = document.querySelector('#modal');
  const modalContent = document.querySelector('#modal-content img');
  const closeModal = document.querySelector('.close-modal');
  const imgGallery = document.querySelectorAll('.card-foto img');

  function openModal(event) {
    const newContent = event.target.getAttribute('src');
    modal.style.display = 'flex';
    modalContent.setAttribute('src', newContent);
  }
  function clossingModal() {
    modal.style.display = 'none';
  }
  function clickOutside(e) {
    if (e.target !== modalContent) {
      clossingModal();
    }
  }
  modal.addEventListener('click', clickOutside);
  closeModal.addEventListener('click', clossingModal);
  imgGallery.forEach((img) => {
    img.addEventListener('click', openModal);
  });
}
initModalGallery();
