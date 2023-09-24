document.addEventListener("DOMContentLoaded", function () {
  const refs = {
    openModal: document.querySelector(".mobile-menu__btn"),
    closeModal: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-menu]"),
    backdrop: document.querySelector("[data-drop]"),
  };

  refs.openModal.addEventListener("click", toggleModal);
  refs.closeModal.addEventListener("click", toggleModal);

  async function toggleModal() {
    if (refs.modal.classList.contains("is-active")) {
      refs.modal.classList.remove("is-active");
      setTimeout(function () {
        refs.backdrop.classList.add("is-hidden");
      }, 1000); // Задержка в миллисекундах, соответствующая продолжительности анимации
    } else {
      refs.backdrop.classList.remove("is-hidden");
      refs.modal.classList.add("is-active");
    }
  }
});
