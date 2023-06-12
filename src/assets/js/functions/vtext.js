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
