<template>
  <div class="cart-wrapper">
    <div class="cart-main-block">
      <div class="cart-info">
        <span class="cart-info__title">Корзина ({{cart.length}})</span>
        <div class="cart-items">
          <div v-for="item in cart" :key="item.id" class="cart-item">
            <img class="cart-img" :src="item.src" alt="candle" width="100">
            <div class="cart-item__description">
              <p class="cart-item__name" v-text="item.name"/>
              <p class="cart-item__descriptions" v-text="item.description" />
              <span class="cart-price">{{item.price}} p.</span>
            </div>
          </div>
        </div>
      </div>
      <aside class="cart-aside">
        aside
      </aside>
    </div>
    <form class="form" @submit.prevent>
      <input v-model="form.name" type="text" placeholder="Имя">
      <input v-model="form.phone" type="number" placeholder="Номер телефона">
      <button @click.prevent="sendCart">Сформировать корзину</button>
    </form>
  </div>
</template>

<script setup>
let form = ref({})
const cart = useCart()
form = {
  name: '',
  phone: '',
  order: cart
}
async function sendCart() {
  let response = await fetch(`https://api.telegram.org/bot6146228312:AAGFhGAImw6so7p7r02jWKEvsFbzhP283VQ/sendMessage?chat_id=412483578&text=${JSON.stringify(form)}`, {
    method: 'POST',
  });
  //https://api.telegram.org/bot<6146228312:AAGFhGAImw6so7p7r02jWKEvsFbzhP283VQ>/sendMessage?chat_id=412483578&text=Всем привет!
  console.log(response, 'response')
}
</script>

<style scoped lang="scss">
.cart-wrapper {
  padding: 88px 10% 100px;

  .cart-main-block {
    display: flex;
    justify-content: space-between;
    .cart-info {
      .cart-info__title {
        margin-bottom: 17px;
        display: block;
      }

      .cart-items {
        .cart-item {
          display: flex;
          gap: 15px;

          .cart-img {
            width: 100px;
            height: 100px;
          }

          .cart-item__description {
            .cart-item__name {
              font-size: 17px;
              line-height: 19px;
              color: #2e2d2d;
            }
          }
        }
      }
    }

    .cart-aside {

    }
  }

  .form {
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
      border: 1px solid #BDB9B7;
    }
  }
}
</style>
