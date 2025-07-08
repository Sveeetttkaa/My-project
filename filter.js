document.addEventListener('DOMContentLoaded', () => {
  const onlyTeslaBtn = document.querySelector('.only-tesla');
  const onlyAudiBtn = document.querySelector('.only-audi');
  const onlyLambBtn = document.querySelector('.only-lamb');
  const allBtn = document.querySelector('.all');

  const allCars = document.querySelectorAll('.column-car article');
  const teslaCars = document.querySelectorAll('.column-car .tesla');
  const audiCars = document.querySelectorAll('.column-car .audi');
  const lambCars = document.querySelectorAll('.column-car .lamb');

  const filterButtons = [allBtn, onlyTeslaBtn, onlyAudiBtn, onlyLambBtn];

  const images = {
    all: {
      normal: 'images/неактивный фильтр все машины.png',
      active: 'images/фильтр все машины.png'
    },
    tesla: {
      normal: 'images/фильтр тесла.png',
      active: 'images/активный фильтр тесла.png'
    },
    audi: {
      normal: 'images/фильтр ауди.png',
      active: 'images/активный фильтр ауди.png'
    },
    lamb: {
      normal: 'images/логотип ламбы.png',
      active: 'images/активный фильтр ламба.png'
    }
  };

  function hideAll() {
    allCars.forEach(car => car.style.display = 'none');
  }

  function showCars(cars) {
    cars.forEach(car => car.style.display = 'block');
  }

  function setActiveButton(activeBtn, activeKey) {
    filterButtons.forEach(btn => {
      btn.classList.remove('active-filter');
      if (btn.classList.contains('all')) btn.src = images.all.normal;
      else if (btn.classList.contains('only-tesla')) btn.src = images.tesla.normal;
      else if (btn.classList.contains('only-audi')) btn.src = images.audi.normal;
      else if (btn.classList.contains('only-lamb')) btn.src = images.lamb.normal;
    });

    activeBtn.classList.add('active-filter');
    activeBtn.src = images[activeKey].active;
  }

  function filterCars(activeBtn, activeKey, carsToShow) {
    setActiveButton(activeBtn, activeKey);
    // Используем setTimeout, чтобы фильтрация произошла после обновления активного состояния
    setTimeout(() => {
      hideAll();
      showCars(carsToShow);
    }, 10);
  }

  allBtn.addEventListener('click', () => {
    filterCars(allBtn, 'all', allCars);
  });

  onlyTeslaBtn.addEventListener('click', () => {
    filterCars(onlyTeslaBtn, 'tesla', teslaCars);
  });

  onlyAudiBtn.addEventListener('click', () => {
    filterCars(onlyAudiBtn, 'audi', audiCars);
  });

  onlyLambBtn.addEventListener('click', () => {
    filterCars(onlyLambBtn, 'lamb', lambCars);
  });

  // Инициализация
  filterCars(allBtn, 'all', allCars);
});