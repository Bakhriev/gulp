
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

const dropdownInit = () => {
  const allDropdowns = document.querySelectorAll('[data-dropdown]')

  if (window.innerWidth > 992.98) {
    document.addEventListener('click', e => {
      let currentDropdown
      if (e.target.closest('[data-dropdown]')) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
      }

      document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
      })
    })
    allDropdowns.forEach(d => {
      d.addEventListener('mouseover', () => {
        d.classList.add('active')
      })
      d.addEventListener('mouseleave', () => {
        d.classList.remove('active')
      })
    })
  } else {
    allDropdowns.forEach(drp => {
      drp.addEventListener('click', () => {
        const subMenu = drp.querySelector('.sub-menu')
        if (!subMenu.style.maxHeight) {
          const allSubMenus = document.querySelectorAll('.sub-menu')
          allSubMenus.forEach(sub => {
            sub.style.maxHeight = ''
          })
          subMenu.style.maxHeight = subMenu.scrollHeight + 'px'
        } else {
          subMenu.style.maxHeight = ''
        }
      })
    })
  }
}
dropdownInit()

export const magnifierFunc = () => {
  const imgContainer = document.querySelector('.img-container')
  const img = document.querySelector('.img-container img')
  const magnifier = document.querySelector('.magnifier')

  let flag = false

  imgContainer.addEventListener('mouseover', () => {
    magnifier.style.display = 'block'
    flag = true
  })
  imgContainer.addEventListener('mouseout', () => {
    magnifier.style.display = 'none'
    flag = false
  })

  imgContainer.addEventListener('mousemove', e => {
    if (flag) {
      const { clientX, clientY } = e

      const x = clientX - imgContainer.offsetLeft
      const y = clientY - imgContainer.offsetTop

      magnifier.style.left = `${x}px`
      magnifier.style.top = `${y}px`
      console.log(magnifier.backgroundSize)
      const bgX = (100 * x) / img.offsetWidth
      const bgY = (100 * y) / img.offsetHeight

      magnifier.style.backgroundPosition = `${bgX}% ${bgY}%`
    }
  })
}


export function rippleEffect(e) {
  const x = e.clientX - e.target.offsetLeft
  const y = e.clientY - e.target.offsetTop

  const span = document.createElement('span')
  span.style.left = `${x}px`
  span.style.top = `${y}px`

  console.log(this)
  this.appendChild(span)
  setTimeout(() => {
    span.remove()
  }, 800)
}

// const button = document.querySelector('.btn-r')
// button.addEventListener('click', rippleEffect)

const navLinks = document.querySelectorAll('.duplicate')

if (window.innerWidth > 1024) {
  navLinks.forEach(link => {
    const spans1 = link.querySelectorAll('.v-text-1 span')
    const spans2 = link.querySelectorAll('.v-text-2 span')

    link.addEventListener('mouseover', () => {
      BounceText(spans1)
      BounceText(spans2, 100, 80, 10)
    })

    link.addEventListener('mouseleave', () => {
      spans1.forEach(span => {
        span.style.transform = `translate(0, 0)`
      })
      spans2.forEach(span => {
        span.style.transform = `translate(0, 100%)`
      })
    })
  })
}

function BounceText(
  spans,
  transformRate = 110,
  durationIncrement = 40,
  delayIncrement = 20
) {
  let delay = 0
  let duration = 250
  spans.forEach(span => {
    span.style.transition = `transform ${duration}ms ease-in-out`
    span.style.transitionDelay = `${delay}ms`
    span.style.transform = `translate(0, -${transformRate}%)`

    if (delay < 100) {
      delay += delayIncrement
    } else {
      delay += delayIncrement / 2
    }

    if (duration < 300) {
      duration += durationIncrement
    } else {
      duration += durationIncrement / 2
    }
  })
}
