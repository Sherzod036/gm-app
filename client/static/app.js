let lastScrollTop = 0
const header = document.getElementById('header')

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop

  scrollTop > lastScrollTop
    ? header.classList.add('header_up')
    : header.classList.remove('header_up')

  lastScrollTop = scrollTop
})

const services = document.querySelectorAll('.service')
const servicesImage = document.querySelectorAll('.services__image')
Array.from(services).map((service) => {
  service.addEventListener('mouseenter', function () {
    Array.from(servicesImage).map((image) =>
      image.classList.remove('service_show')
    )
    const id = service.attributes[0].value
    document.getElementById(id).classList.add('service_show')
  })
})

// ScrollMagic
// const feedbackImage = document.querySelector('.feedback__image')

// let feedbackController = new ScrollMagic.Controller()
// let feedbackScene = new ScrollMagic.Scene({
//   triggerElement: '#feedback',
//   duration: 400
// })
//   .setTween(
//     new TimelineMax().add([
//       TweenMax.fromTo(
//         feedbackImage,
//         1,
//         { width: '50%', height: '50%' },
//         { width: '100%', height: '100%' }
//       )
//     ])
//   )
//   .addTo(feedbackController)
