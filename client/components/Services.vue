<template>
  <section class="services">
    <span id="service_1" class="services__image service_show">
      <img src="~assets/img/services/service-1.jpg" alt="" />
    </span>
    <span id="service_2" class="services__image">
      <img src="~assets/img/services/service-2.jpg" alt="" />
    </span>
    <span id="service_3" class="services__image">
      <img src="~assets/img/services/service-3.jpg" alt="" />
    </span>
    <div class="services__container container">
      <div class="services__content">
        <span class="services__pre-title">
          Ознакомьтесь с основными видами наших услуг
        </span>
        <h2 class="services__title title">Наши услуги</h2>
        <div class="service service_1" data-image="service_1">
          <p class="service__desc">
            Маркетинг и продвижение <br />
            фармацевтической продукции
          </p>
          <span class="service__circle"></span>
          <span class="service__count">01</span>
        </div>
        <div class="service service_2" data-image="service_2">
          <p class="service__desc">
            Реализация продукции по всей <br />
            территории республики Узбекистан
          </p>
          <span class="service__circle"></span>
          <span class="service__count">02</span>
        </div>
        <div class="service service_3" data-image="service_3">
          <p class="service__desc">
            Регистрация / перерегистрация <br />
            фармацевтической продукции
          </p>
          <span class="service__circle"></span>
          <span class="service__count">03</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
