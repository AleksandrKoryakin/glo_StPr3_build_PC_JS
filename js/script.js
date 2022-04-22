// массив заголовков
const titles = document.querySelectorAll('.program-line__title')
// массив описаний
const descrs = document.querySelectorAll('.program-line__descr')

// на каждый заголовок вешаем событие + запоминаем индекс заголовка
titles.forEach((title, index) => {
  title.addEventListener('click', () => {
    // каждое описание выключаем
    descrs.forEach((descr) => {
      descr.classList.remove('active');
    })
    // индексированное описание включаем
    descrs[index].classList.add('active');
  })
})