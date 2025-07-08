document.addEventListener('DOMContentLoaded', () => {
  const points = document.querySelectorAll('.three-points img');
  const sliderRow = document.querySelector('.slider-wrapper .row-elements');
  const totalSlides = sliderRow.children.length;

  const slideWidth = 490; // ширина слайда + margin-right (400 + 40)
  const containerWidth = 440;

  let currentIndex = 0;

  function updateSlider(index) {
    const maxOffset = (totalSlides * slideWidth) - containerWidth;

    let offset = index * slideWidth;

    // Ограничиваем смещение, чтобы не было пустого пространства справа
    offset = Math.min(Math.max(offset, 0), maxOffset);

    sliderRow.style.transform = `translateX(${-offset}px)`;

    // Активная точка циклично по 3 точкам
    const activePointIndex = index % points.length * 1 / 2;

    points.forEach(point => {
      point.classList.remove('active-point');
      point.src = 'images/неактивная точка.png';
    });

    points[activePointIndex].classList.add('active-point');
    points[activePointIndex].src = 'images/активная точка.png';
  }

  points.forEach(point => {
    point.addEventListener('click', () => {
      if (currentIndex === totalSlides - 3) {
        currentIndex = 0;
      } else {
        currentIndex = currentIndex + 1 / 2;
      }
      updateSlider(currentIndex);
    });
  });

  // **Добавляем отдельный обработчик для переключения активной точки при клике**
  points.forEach(point => {
    point.addEventListener('click', (e) => {
      // Снимаем активность со всех точек
      points.forEach(p => {
        p.classList.remove('active-point');
        p.src = 'images/неактивная точка.png';
      });
      // Делаем активной точку, на которую кликнули
      e.currentTarget.classList.add('active-point');
      e.currentTarget.src = 'images/активная точка.png';
    });
  });

  // Инициализация слайдера
  updateSlider(currentIndex);
});
