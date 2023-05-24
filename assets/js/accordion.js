const accordions = document.querySelectorAll('.tabs__accordion');

accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    const panel = accordion.nextElementSibling;
    const tabs = accordion.parentElement;

    accordion.classList.toggle('active');
    accordion.classList.remove('active-before'); // удаляем класс при клике

    if (panel.style.display === 'block') {
      panel.style.display = 'none';
      tabs.style.backgroundColor = 'rgb(39, 46, 59)';
      accordion.classList.add('active-before'); // добавляем класс при скрытии
      accordion.classList.remove('active-after');
    } else {
      panel.style.display = 'block';
      tabs.style.backgroundColor = '#fff';
      accordion.classList.add('active-after');
      accordion.classList.remove('active-before'); // удаляем класс при показе
    }
  });
});