// // массив заголовков
// const titles = document.querySelectorAll('.program-line__title')
// // массив описаний
// const descrs = document.querySelectorAll('.program-line__descr')

// // на каждый заголовок вешаем событие + запоминаем индекс заголовка
// titles.forEach((title, index) => {
//   title.addEventListener('click', () => {
//     // каждое описание выключаем
//     descrs.forEach((descr) => {
//       descr.classList.remove('active');
//     })
//     // индексированное описание включаем
//     descrs[index].classList.add('active');
//   })
// })

const accordeon = () => {
  const contents = document.querySelectorAll('.program-line__content')
  const contentsDescr = document.querySelectorAll('.program-line__descr')

  contents.forEach((elem) => {
    const title = elem.querySelector('.program-line__title')
    const descr = elem.querySelector('.program-line__descr')

    descr.style.transition = 'height .3s'
    descr.style.overflow = 'hidden'

    title.addEventListener('click', () => {
      contentsDescr.forEach((tab) => {
        if (tab === descr) {
          tab.style.height = tab.scrollHeight + 'px'
        } else {
          tab.style.height = 0
        }
      })
    })
  })
}

accordeon()