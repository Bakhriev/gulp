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

