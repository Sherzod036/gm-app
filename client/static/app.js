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
  service.addEventListener('mouseenter', () => {
    Array.from(servicesImage).map((image) =>
      image.classList.remove('service_show')
    )
    let id = service.attributes[0].value
    document.getElementById(id).classList.add('service_show')
  })
})
