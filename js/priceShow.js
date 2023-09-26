// Получаем ссылку на элемент, в котором будет меняться контент
const contentElement = document.getElementById("content");

// Функция для обновления контента на основе ширины экрана
function updateContent() {
  if (window.innerWidth > 768) {
    contentElement.innerHTML = "<p>Контент для больших экранов</p>";
  } else {
    contentElement.innerHTML = "<p>Контент для маленьких экранов</p>";
  }
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.addEventListener("load", updateContent);
window.addEventListener("resize", updateContent);
