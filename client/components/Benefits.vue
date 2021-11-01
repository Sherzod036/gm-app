<template>
  <div id="process">
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
  </div>
</template>

<script>
export default {
  mounted() {
    const card_1 = document.querySelector('.card_1')
    const card_2 = document.querySelector('.card_2')
    const card_3 = document.querySelector('.card_3')
    const tl = new TimelineMax()

    const tween = tl
      .to(card_1, 8, {
        css: {
          visibility: 'visible',
          top: '0px',
          scale: 0.9
        }
      })
      .to(card_2, 8, {
        css: { visibility: 'visible', top: '35px', scale: 1 }
      })
      .to(card_3, 8, {
        css: { visibility: 'visible', top: '70px', scale: 1.1 }
      })

    const scene = this.$scrollmagic
      .scene({
        triggerElement: '#benefits',
        triggerHook: 0,
        duration: '100%'
      })
      .setPin('#benefits', { pushFollowers: false })
      .setTween(tween)

    this.$scrollmagic.addScene(scene)
  }
}
</script>
