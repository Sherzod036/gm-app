<template>
  <section id="benefits" class="benefits">
    <div class="benefits__container container">
      <h2 class="benefits__title title">Наши преимущества</h2>
      <div class="cards">
        <div class="card card_1">
          <span class="card__icon">
            <img src="~assets/img/cards/card-1.svg" alt="" />
          </span>
          <div class="card__content">
            <span class="card__title">
              Открытое и взаимовыгодное сотрудничество с партнерами
            </span>
            <ul class="card__list">
              <li class="card__list-item">
                На принципах надежности и профессионализма в работе
              </li>
              <li class="card__list-item">
                Постоянный мониторинг рынка и маркетинговые исследования
              </li>
              <li class="card__list-item">
                Эффективное продвижение современных достижений фармацевтики
              </li>
              <li class="card__list-item">
                Поддерживание высоких стандартов качества
              </li>
              <li class="card__list-item">
                Регистрация и перерегистрация лекарственных препаратов
              </li>
            </ul>
          </div>
        </div>
        <div class="card card_2">
          <span class="card__icon">
            <img src="~assets/img/cards/card-2.svg" alt="" />
          </span>
          <div class="card__content">
            <span class="card__title">Наша команда</span>
            <ul class="card__list">
              <li class="card__list-item">
                На принципах надежности и профессионализма в работе
              </li>
              <li class="card__list-item">
                Постоянный мониторинг рынка и маркетинговые исследования
              </li>
              <li class="card__list-item">
                Эффективное продвижение современных достижений фармацевтики
              </li>
              <li class="card__list-item">
                Поддерживание высоких стандартов качества
              </li>
              <li class="card__list-item">
                Регистрация и перерегистрация лекарственных препаратов
              </li>
            </ul>
          </div>
        </div>
        <div class="card card_3">
          <span class="card__icon">
            <img src="~assets/img/cards/card-3.svg" alt="" />
          </span>
          <div class="card__content">
            <span class="card__title">Покрытие рынка</span>
            <ul class="card__list">
              <li class="card__list-item">
                На принципах надежности и профессионализма в работе
              </li>
              <li class="card__list-item">
                Постоянный мониторинг рынка и маркетинговые исследования
              </li>
              <li class="card__list-item">
                Эффективное продвижение современных достижений фармацевтики
              </li>
              <li class="card__list-item">
                Поддерживание высоких стандартов качества
              </li>
              <li class="card__list-item">
                Регистрация и перерегистрация лекарственных препаратов
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { TweenMax, TimelineMax } from 'gsap'

export default {
  mounted() {
    const card_1 = document.querySelector('.card_1')
    const tl = new TimelineMax()
    const scene = this.$scrollmagic
      .scene({
        triggerElement: '#benefits',
        triggerHook: 0,
        duration: '100%'
      })
      .setPin('#benefits', { pushFollowers: false })
      .setTween(tl.add([TweenMax.to(card_1, 1, { top: 0 })]))

    this.$scrollmagic.addScene(scene)
  }
}
</script>
