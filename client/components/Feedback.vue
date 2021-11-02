<template>
  <section id="feedback" class="feedback">
    <div class="feedback__left-block"></div>
    <div class="feedback__right-block">
      <span class="feedback__image">
        <img src="~assets/img/image.jpg" alt="" />
      </span>
    </div>
    <div class="feedback__container container">
      <form class="feedback__form">
        <span class="feedback__form-title">Оставьте заявку</span>
        <p class="feedback__form-desc">
          Оставьте нам заявку и мы свяжемся с Вами и проконсультируем по
          интересующим Вас вопросам.
        </p>
        <input
          class="feedback__form-input"
          type="text"
          placeholder="Ваше имя*"
        />
        <input
          class="feedback__form-input"
          type="text"
          placeholder="Ваш телефон*"
        />
        <input
          class="feedback__form-input"
          type="text"
          placeholder="Ваш e-mail"
        />
        <textarea
          class="feedback__form-textarea"
          type="text"
          placeholder="Ваше сообщение"
        />
        <button class="feedback__form-button" type="submit">Отправить</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
  }
}
</script>
