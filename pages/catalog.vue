<template>
  <div class="carts">
    <div v-for="item in product" :key="item.id" class="cart">
      <img class="cart-img" :src="item.src" alt="candle" width="200">
      <div class="cart-info-container">
        <p class="cart-name" v-text="item.name"/>
        <p class="cart-descriptions" v-text="item.description" />
        <span class="cart-price">{{item.price}} p.</span>
      </div>
      <button class="cart-button" @click="addToCart(item)">В корзину</button>
    </div>
  </div>
</template>

<script setup>
const cart = useCart()
function addToCart(item) {
  cart.value.push(item)
}

const product = [
  {
    id: 1,
    src: '/images/candle1.jpg',
    name: 'Свеча Паулина (белая)',
    description: 'Высота 15 см',
    price: '990—1 170',
  },
  {
    id: 2,
    src: '/images/candle2.jpg',
    name: 'Набор из 3-х свежих ароматов',
    description: 'Коллекция свечей из 3-х свежих ароматов',
    price: '2100',
  },
  {
    id: 3,
    src: '/images/candle3.jpg',
    name: 'Свеча в скорлупе кокоса',
    description: 'Свеча ароматическая в натуральной скорлупе кокоса',
    price: '1200',
  }
]
</script>

<style lang="scss" scoped>
.carts {
  margin: 30px 20px 0;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  .cart {
    width: 220px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 50%);
    transition: 0.2s linear;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 30%) !important;
    }

    .cart-img {
      width: 100%;
      height: 210px;
    }

    .cart-info-container {
      padding: 18px 20px;
      height: 160px;

      .cart-name {
        font-size: 14px;
        font-weight: 600;
      }

      .cart-descriptions {
        margin-top: 8px;
        font-size: 12px;
      }

      .cart-price {
        margin-top: 20px;
        display: block;
      }
    }

    .cart-button {
      color: #ffffff;
      background-color: #ffe0e0;
      border-radius: 100px;
      box-shadow: 0px 0px 7px 0px rgb(0 0 0 / 50%);
      width: 95px;
      height: 35px;
      margin: 0 0 20px 14px;
    }
  }
}
</style>
