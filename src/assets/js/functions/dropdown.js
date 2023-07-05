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
