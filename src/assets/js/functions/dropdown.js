const dropdownInit = () => {
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
  const allDropdowns = document.querySelectorAll('[data-dropdown]')
  if (window.innerWidth > 992) {
    allDropdowns.forEach(d => {
      d.addEventListener('mouseover', () => {
        d.classList.add('active')
      })
      d.addEventListener('mouseleave', () => {
        d.classList.remove('active')
      })
    })
  }
}
