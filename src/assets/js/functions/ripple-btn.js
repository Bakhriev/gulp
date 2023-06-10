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
