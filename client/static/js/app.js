console.log('app')

let didScroll

let lastScrollTop = 0

let delta = 5

const header = document.querySelector('.header')
let headerHeight = document.querySelector('.header').offsetHeight

console.log('headerHeight', headerHeight)

window.addEventListener('scroll', function () {
  didScroll = true
})

setInterval(function () {
  if (didScroll) {
    hasScrolled()

    didScroll = false
  }
}, 250)

function hasScrolled() {
  let st = this.scrollTop()

  if (Math.abs(lastScrollTop - st) <= delta) return

  if (st > lastScrollTop && st > headerHeight) {
    header.classList.remove('header--down')
    header.classList.add('header--up')
  } else {
    if (st + window.innerHeight < document.innerHeight) {
      header.classList.remove('header--up')
      header.classList.add('header--down')
    }
  }

  lastScrollTop = st
}
