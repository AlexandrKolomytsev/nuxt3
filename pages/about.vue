<template>
  <div>
    slider start
    <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
        :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    >
      <SwiperSlide v-for="slide in slides" :key="slide">
        <div class="swiper-container">
          <img src="/images/slider-stars.svg" alt="starts">
          <p class="content-max" v-text="slide.textMax" />
          <span class="content-min" v-text="slide.textMin" />
        </div>
      </SwiperSlide>
    </Swiper>

  </div>
</template>

<script setup>
useHead({
  title: "О нас"
})

let slides = ref([])
slides = [
  {
    img: "/images/slider-stars.svg",
    textMax: "“All the wines were fantastic! Can’t wait to order more!!”",
    textMin: "Lindsay A"
  },
  {
    textMax: "”Very refreshing white, loved the clean taste. Will certainly keep stock on hand.”",
    textMin: "Heidi P"
  },
  {
    textMax: "“The wine is so light & tastes amazing. The shipping was so fast.. I’m sold”",
    textMin: "Jonalyn P"
  }
]
</script>

<style lang="scss" scoped>
@import "../assets/css/variables";
.swiper-container {
  width: 100%;
  background-color: $cream;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-top: 1px solid $black;
  border-bottom: 0.1px solid #232323;
  padding: 40px 20px;

  .content-max {
    font-size: 35px;
    text-align: center;
  }
}
</style>
