const burgerMenu = () => {
  const burger = document.querySelector('.burger')
  const navigation = document.querySelector('.header__navigation')
  const overlay = document.querySelector('.overlay')
  const elements = [burger, navigation, overlay]

  const toggleActiveClass = () =>
    elements.forEach(element => element.classList.toggle('active'))

  burger.addEventListener('click', toggleActiveClass)

  overlay.addEventListener('click', toggleActiveClass)

  window.addEventListener('resize', () => {
    const { innerWidth } = window
    if (innerWidth > 991.98) {
      elements.forEach(element => element.classList.remove('active'))
    }
  })
}

burgerMenu()
