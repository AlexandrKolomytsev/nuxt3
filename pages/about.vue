<template>
  <div>
    About
    <div>
      <button @click="increment">Increment</button>
      <p>{{ count }}</p>
      <button @click="decrement">Decrement</button>
    </div>
    <img src="/images/first.jpg" alt="" width="200">
    <div class="cards">
      <div class="card">
        <img src="/images/candle1.jpg" alt="candle" width="200">
        <p class="descriptions">
          Свеча 1
        </p>
        <button @click="addToCart(e)">Купить</button>
      </div>
      <div class="card">
        <img src="/images/candle2.jpg" alt="candle" width="200">
        <p class="descriptions">
          Свеча 2
        </p>
        <button @click="addToCart(e)">Купить</button>
      </div>
      <div class="card">
        <img src="/images/candle3.jpg" alt="candle" width="200">
        <p class="descriptions">
          Свеча 3
        </p>
        <button @click="addToCart(e)">Купить</button>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "О нас"
})
const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  count.value--
}

const cart = useCart()
function addToCart() {
  cart.value.push({
    name: 'Свеча'
  })
}

</script>

<style lang="scss" scoped>
.cards {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  .card {
    display: flex;
    flex-direction: column;
  }
}
</style>
